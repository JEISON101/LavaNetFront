import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data:any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Datos del login:", data);
    alert(`Bienvenido, ${data.email}`);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card
            className="border-0"
            style={{
              borderRadius: "1rem",
              backgroundColor: "white",
            }}
          >
            <Card.Body className="p-4 p-md-5">
              <h3 className="fw-bold text-center mb-4 text-primary">
                Iniciar sesión
              </h3>

              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold small">
                    Correo electrónico
                  </Form.Label>
                  <div className="d-flex align-items-center border rounded px-3 py-1">
                    <FaEnvelope className="text-muted me-2" />
                    <Form.Control
                      type="email"
                      placeholder="tuemail@ejemplo.com"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                          message: "Formato de correo inválido",
                        },
                      })}
                      className="border-0 shadow-none p-2"
                      style={{ fontSize: "0.95rem" }}
                    />
                  </div>
                  {errors.email && (
                    <div className="text-danger small mt-1">
                      {/* errors.email.message */}
                    </div>
                  )}
                </Form.Group>

                {/* Contraseña */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold small">
                    Contraseña
                  </Form.Label>
                  <div className="d-flex align-items-center border rounded px-3 py-1">
                    <FaLock className="text-muted me-2" />
                    <Form.Control
                      type="password"
                      placeholder="********"
                      {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: {
                          value: 6,
                          message: "Debe tener al menos 6 caracteres",
                        },
                      })}
                      className="border-0 shadow-none p-2"
                      style={{ fontSize: "0.95rem" }}
                    />
                  </div>
                  {errors.password && (
                    <div className="text-danger small mt-1">
                      {/* errors.password.message */}
                    </div>
                  )}
                </Form.Group>

                {/* Botón */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 rounded-pill py-2 fw-semibold mt-2"
                  disabled={isSubmitting}
                  style={{ fontSize: "0.95rem" }}
                >
                  {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                </Button>

                {/* Enlace registro */}
                <div className="text-center mt-3">
                  <small className="text-muted">
                    ¿No tienes cuenta?{" "}
                    <a href="/register" className="text-primary fw-semibold">
                      Regístrate aquí
                    </a>
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
