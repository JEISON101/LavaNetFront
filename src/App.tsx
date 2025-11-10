
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/public/Landing";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Admin/Dashboard";
import Favoritos from "./pages/Client/Favoritos";
import HomeProvider from "./pages/Provider/HomeProvider";
import AlquileresProvider from "./pages/Provider/AlquileresProvider";
import HomeClient from "./pages/Client/HomeClient";
import Usuarios from "./pages/Admin/Usuarios";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        {/* RUTAS ADMIN */}
        <Route path="/admin/home" element={<Dashboard/>} />
        <Route path="/admin/usuarios" element={<Usuarios/>} />

        {/* RUTAS PROVEEDOR */}
        <Route path="/provider/home" element={<HomeProvider/>} />
        <Route path="/provider/alquileres" element={<AlquileresProvider/>} />

        {/* RUTAS CLIENTE */}
        <Route path="/client/home" element={<HomeClient/>} />
        <Route path="/client/favoritos" element={<Favoritos/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
