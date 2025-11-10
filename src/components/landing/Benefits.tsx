import { Card, Col, Container, Row } from "react-bootstrap";
import { FaUser, FaCogs, FaChartLine, FaClock, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold display-6">
          Beneficios que hacen la diferencia
        </h2>

        <Row className="g-4">
          {/* CLIENTES */}
          <Col md={6}>
            <Card
              className="border-0 shadow-lg h-100"
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e9f3ff 100%)",
              }}
            >
              <Card.Body className="p-5">
                <div className="d-flex align-items-center mb-3">
                  <FaUser size={40} className="text-primary me-3" />
                  <h4 className="fw-bold text-primary mb-0">Para clientes</h4>
                </div>
                <ul className="fs-5 text-muted list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-center">
                    <FaMapMarkerAlt className="text-primary me-2" /> 
                    Encuentra lavadoras cerca de ti
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <FaClock className="text-primary me-2" /> 
                    Seguimiento en tiempo real
                  </li>
                  <li className="d-flex align-items-center">
                    <FaBolt className="text-primary me-2" /> 
                    Servicio rápido y confiable
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* PROVEEDORES */}
          <Col md={6}>
            <Card
              className="border-0 shadow-lg h-100"
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e8fcef 100%)",
              }}
            >
              <Card.Body className="p-5">
                <div className="d-flex align-items-center mb-3">
                  <FaCogs size={40} className="text-success me-3" />
                  <h4 className="fw-bold text-success mb-0">Para proveedores</h4>
                </div>
                <ul className="fs-5 text-muted list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-center">
                    <FaChartLine className="text-success me-2" /> 
                    Genera ingresos constantes
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <FaCogs className="text-success me-2" /> 
                    Gestiona tu inventario fácilmente
                  </li>
                  <li className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-success me-2" /> 
                    Gana visibilidad local
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
