import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBirthdayCake,
  FaUserTag,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import type { Register as RegisterData } from "../../interfaces/authInterface";
import { registerService } from "../../services/authService";

const Register = () => {
  const [rol, setRol] = useState("Cliente");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>();

  const onSubmit = async (data: RegisterData) => {
    try {
      setError("");
      const dataWithRole = { ...data, rol };
      console.log("Registrando usuario:", dataWithRole);
      const response = await registerService(dataWithRole);
      alert(response.message);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100 py-4">
        <Col xs={12} md={10} lg={8} xl={6}>
          <Card className="border-0" style={{ borderRadius: "1rem" }}>
            <Card.Body className="p-5">
              <h3 className="fw-bold text-center mb-4 text-primary">
                Crear cuenta
              </h3>

              {error && (
                <Alert variant="danger" className="mb-3">
                  {error}
                </Alert>
              )}

              {/* Selector de rol */}
              <div className="text-center mb-4">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                  <FaUserTag className="text-primary fs-4" />
                  <h6 className="fw-semibold mb-0">Selecciona tu rol</h6>
                </div>

                <ToggleButtonGroup
                  type="radio"
                  name="rol"
                  value={rol}
                  onChange={(val) => setRol(val)}
                  className="mt-2"
                >
                  <ToggleButton
                    id="tbg-radio-1"
                    value="Cliente"
                    variant={rol === "Cliente" ? "primary" : "outline-primary"}
                    className="px-4 py-2 fw-semibold rounded-pill"
                    style={{
                      minWidth: "100px",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    Cliente
                  </ToggleButton>

                  <ToggleButton
                    id="tbg-radio-2"
                    value="Proveedor"
                    variant={
                      rol === "Proveedor" ? "success" : "outline-success"
                    }
                    className="px-4 py-2 fw-semibold rounded-pill ms-3"
                    style={{
                      minWidth: "100px",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    Proveedor
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Nombres */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombres</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaUser className="text-muted me-2" />
                    <Form.Control
                      type="text"
                      placeholder="Tus nombres"
                      {...register("nombres", {
                        required: "Campo obligatorio",
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.nombres && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.nombres.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Apellidos */}
                <Form.Group className="mb-3">
                  <Form.Label>Apellidos</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaUser className="text-muted me-2" />
                    <Form.Control
                      type="text"
                      placeholder="Tus apellidos"
                      {...register("apellidos", {
                        required: "Campo obligatorio",
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.apellidos && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.apellidos.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Correo */}
                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaEnvelope className="text-muted me-2" />
                    <Form.Control
                      type="email"
                      placeholder="correo@ejemplo.com"
                      {...register("correo", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                          message: "Correo inválido",
                        },
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.correo && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.correo.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaLock className="text-muted me-2" />
                    <Form.Control
                      type="password"
                      placeholder="********"
                      {...register("password", {
                        required: "Campo obligatorio",
                        minLength: {
                          value: 6,
                          message: "Debe tener al menos 6 caracteres",
                        },
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.password && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.password.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Dirección */}
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaMapMarkerAlt className="text-muted me-2" />
                    <Form.Control
                      type="text"
                      placeholder="Tu dirección"
                      {...register("direccion", {
                        required: "Campo obligatorio",
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.direccion && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.direccion.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Teléfono */}
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaPhoneAlt className="text-muted me-2" />
                    <Form.Control
                      type="tel"
                      placeholder="+57 300 000 0000"
                      {...register("telefono", {
                        required: "Campo obligatorio",
                        minLength: {
                          value: 7,
                          message: "Número inválido",
                        },
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.telefono && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.telefono.message}
                    </Alert>
                  )}
                </Form.Group>

                {/* Fecha de nacimiento */}
                <Form.Group className="mb-4">
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <div className="d-flex align-items-center border rounded px-3">
                    <FaBirthdayCake className="text-muted me-2" />
                    <Form.Control
                      type="date"
                      {...register("fechaNacimiento", {
                        required: "Campo obligatorio",
                      })}
                      className="border-0 shadow-none"
                    />
                  </div>
                  {errors.fechaNacimiento && (
                    <Alert variant="danger" className="py-1 mt-2">
                      {errors.fechaNacimiento.message}
                    </Alert>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  variant={rol === "Proveedor" ? "success" : "primary"}
                  className="w-100 rounded-pill py-2 fw-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registrando..." : `Registrarme como ${rol}`}
                </Button>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    ¿Ya tienes cuenta?{" "}
                    <a
                      onClick={() => navigate("/login")}
                      className="text-primary fw-semibold"
                      style={{ cursor: "pointer" }}
                    >
                      Inicia sesión
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

export default Register