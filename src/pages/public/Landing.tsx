import { Container, Button, Navbar, Nav } from "react-bootstrap";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import Benefits from "../../components/landing/Benefits";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="md" fixed="top" bg="white" className="shadow-sm py-2 align-items-center">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-primary fs-2">
            LavApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav" className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link href="#features" className="mx-2">
                Cómo funciona
              </Nav.Link>
              <Nav.Link href="#benefits" className="mx-2">
                Beneficios
              </Nav.Link>
              <Button
                onClick={() => navigate("/login")}
                variant="primary"
                className="px-4 rounded-pill mx-2"
              >
                Iniciar sesión
              </Button>
              <Button
                onClick={() => navigate("/register")}
                variant="outline-primary"
                className="px-4 rounded-pill mx-2"
              >
                Registrarse
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="d-flex align-items-center text-center"
        style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Hero />
      </section>

      <section id="features" className="py-5 bg-white border-top">
        <Features />
      </section>

      <section id="benefits" className="py-5">
        <Benefits />
      </section>

      <footer className="py-4 text-center text-muted bg-light border-top">
        <Container>
          <p className="mb-1">
            &copy; {new Date().getFullYear()} LavApp. Todos los derechos
            reservados.
          </p>
          <small>Contacto | Términos | Privacidad</small>
        </Container>
      </footer>
    </>
  );
}

export default Landing;
