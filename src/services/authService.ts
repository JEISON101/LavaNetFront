import axios from "axios"
import type { LoginInterface, Register } from "../interfaces/authInterface"

const baseUrl = import.meta.env.VITE_URL_BACK
const prefix = "/api/auth"

export const registerService = async (data: Register) => {
  try {
    const res = await axios.post(
      `${baseUrl}${prefix}/register`,
      data
    );
    console.log("Registro ok:", res.data);
    return res.data;

  } catch (err: any) {
    console.error("Error backend:", err.response?.data);
    throw err;
  }
};


export const loginService = async(data: LoginInterface) => {
  try {
    const res = await axios.post(`${baseUrl}${prefix}/login`, data)
    if(res.data) localStorage.setItem('token', res.data);
    console.log("Login ok:", res.data);
    return res.data.message;
  } catch (error) {
    throw error
  }
}

export const logout = async() => {
  localStorage.clear();
}