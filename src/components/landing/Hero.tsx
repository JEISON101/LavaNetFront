import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md={6} className="text-md-start">
          <h1 className="fw-bold display-4 mb-3">Lavar nunca fue tan fácil</h1>
          <p className="lead mb-4 text-muted">
            Encuentra lavadoras disponibles cerca de ti o gana dinero alquilando
            las tuyas. Todo desde una sola app.
          </p>
          <div className="mt-4 d-flex gap-3 justify-content-md-start justify-content-center">
          <Button onClick={()=> navigate('/login')} variant="primary" size="lg" className="rounded-pill">
            Iniciar sesión
          </Button>
          <Button onClick={()=> navigate('/register')} variant="outline-primary" size="lg" className="rounded-pill">
            Registrarse
          </Button>
        </div>
        </Col>
        <Col md={5} className="mt-5 mt-md-0">
          <img
            src="https://res.cloudinary.com/djfutossp/image/upload/v1765488099/xzdi8kcfaxvow5qxgcps.png"
            alt="App mockup"
            className="img-fluid rounded shadow-lg"
            style={{ borderRadius: "1.5rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
