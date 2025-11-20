import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import "./App.css";

function WS() {
  const stompClientRef = useRef<Client | null>(null);
  const [ubicacion, setUbicacion] = useState<any>(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws-ubicaciones"),
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Conectado al WebSocket");
        client.subscribe("/topic/ubicaciones", (msg) => {
          const ubicacionRecibida = JSON.parse(msg.body);
          setUbicacion(ubicacionRecibida);
        });
      },
      onDisconnect: () => console.log("Desconectado"),
    });

    client.activate();
    stompClientRef.current = client;

    return () => {
      if (client.active) {
        client.deactivate().catch((err) => console.error("Error al desconectar:", err));
      }
    };
  }, []);

  const enviarUbicacion = (lat: number, lon: number) => {
    const client = stompClientRef.current;
    if (!client || !client.connected) return;

    const data = {
      usuario: { idUsuario: 5 },
      latitud: lat,
      longitud: lon,
    };

    client.publish({
      destination: "/app/ubicacion",
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <h1>Ubicación en tiempo real</h1>
      {ubicacion ? (
        <p>
          Lat: {ubicacion.latitud}, Lon: {ubicacion.longitud}
        </p>
      ) : (
        <p>Esperando ubicación...</p>
      )}

      <button onClick={() => enviarUbicacion(4.65, -74.05)}>
        Enviar ubicación de prueba
      </button>
    </div>
  );
}

export default WS;
