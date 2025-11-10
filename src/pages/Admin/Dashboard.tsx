import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Datos de ejemplo
  const activityData = [
    { name: "Lun", alquileres: 40 },
    { name: "Mar", alquileres: 55 },
    { name: "Mié", alquileres: 48 },
    { name: "Jue", alquileres: 62 },
    { name: "Vie", alquileres: 70 },
    { name: "Sáb", alquileres: 80 },
    { name: "Dom", alquileres: 58 },
  ];

  const providersData = [
    { name: "Juan", lavadoras: 30 },
    { name: "Carlos", lavadoras: 25 },
    { name: "Karen", lavadoras: 20 },
  ];

  return (
    <Container fluid className="py-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 text-primary text-center">
        Panel de Administración
      </h2>

      {/* Cards de métricas */}
      <Row className="g-4 mb-4">
        {[
          { label: "Alquileres hoy", value: 40 },
          { label: "Esta semana", value: 320 },
          { label: "Este mes", value: 1240 },
          { label: "Este año", value: 15200 },
        ].map((item, i) => (
          <Col xs={6} md={3} key={i}>
            <Card className="border-0 text-center h-100 shadow-sm rounded-4">
              <Card.Body>
                <h6 className="text-muted">{item.label}</h6>
                <h3 className="fw-bold text-primary">{item.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Gráficas */}
      <Row className="g-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm h-100 rounded-4">
            <Card.Body>
              <h6 className="fw-semibold mb-3">Actividad semanal</h6>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={activityData}>
                  <Line
                    type="bump"
                    dataKey="alquileres"
                    stroke="#007bff"
                    strokeWidth={3}
                  />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow-sm h-100 rounded-4">
            <Card.Body>
              <h6 className="fw-semibold mb-3">Proveedores con más lavadoras</h6>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={providersData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="lavadoras" fill="#28a745" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
