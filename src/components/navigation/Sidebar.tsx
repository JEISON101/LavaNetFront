import type React from "react";
import { Nav } from "react-bootstrap";
import { FaChartBar, FaUsers, FaBox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type PropSide = {
  rol?: string;
}

const Sidebar:React.FC <PropSide> = () => {
  const navigate = useNavigate();

  const menu = {
    admin: [
      { label: "Dashboard", icon: <FaChartBar />, path: "/admin/home" },
      { label: "Usuarios", icon: <FaUsers />, path: "/admin/usuarios" },
    ],
    proveedor: [
      { label: "Mis lavadoras", icon: <FaBox />, path: "/provider/lavadoras" },
      { label: "Alquileres", icon: <FaChartBar />, path: "/provider/alquileres" },
    ],
    cliente: [
      { label: "Home", icon: <FaBox />, path: "/client/home" },
      { label: "Favoritos", icon: <FaChartBar />, path: "/client/favoritos" },
    ],
  };

  return (
    <div
      className="d-flex flex-column bg-white shadow-sm p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h5 className="fw-bold text-primary mb-4">LavApp</h5>
      <Nav className="flex-column">
        {menu['admin']?.map((item, i) => (
          <Nav.Link
            key={i}
            onClick={() => navigate(item.path)}
            className="d-flex align-items-center gap-2 text-muted fw-semibold my-1"
          >
            {item.icon}
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
