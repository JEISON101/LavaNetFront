import { Navigate } from 'react-router-dom';

export const RutaProtegida = ({ children }: { children: React.ReactNode }) => {
  return localStorage.getItem('token') ? <>{children}</> : <Navigate to="/login" />;
};