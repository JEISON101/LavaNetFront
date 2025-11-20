export interface Register{
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  password: string;
  rol: string;
  direccion: string;
  correo: string;
  telefono: string;
}

export interface LoginInterface{
  correo: string;
  password: string;
}

export interface User{
  idUsuario: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  rol: string;
  direccion: string;
  correo: string;
  telefono: string;
}