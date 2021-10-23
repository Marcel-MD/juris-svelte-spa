import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

export async function login(email: string, password: string) {
  return await axios.post(API_URL + "login", {
    email,
    password,
  });
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const logout = () => {
  localStorage.removeItem("user");
};
