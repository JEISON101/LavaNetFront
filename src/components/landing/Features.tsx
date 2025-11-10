import { Col, Container, Row } from "react-bootstrap"
import { FaClock, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa"

const Features = () => {
  return (
        <Container>
          <h2 className="text-center mb-5 fw-bold">Cómo funciona</h2>
          <Row className="text-center fs-4">
            <Col md={6} lg={4}>
              <div className="p-4 h-100 mb-4">
                <FaMobileAlt size={45} className="text-primary mb-3" />
                <h5 className="fw-semibold mb-2">Regístrate</h5>
                <p className="text-muted mb-0">
                  Crea tu cuenta en segundos y empieza a alquilar o rentar.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 h-100 mb-4">
                <FaMapMarkerAlt size={45} className="text-primary mb-3" />
                <h5 className="fw-semibold mb-2">Encuentra lavadoras</h5>
                <p className="text-muted mb-0">
                  Elige la más cercana y haz seguimiento en tiempo real.
                </p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="p-4 h-100 mb-4">
                <FaClock size={45} className="text-primary mb-3" />
                <h5 className="fw-semibold mb-2">Sigue tu lavado</h5>
                <p className="text-muted mb-0">
                  Recibe notificaciones automáticas hasta que termine el ciclo.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default Features
