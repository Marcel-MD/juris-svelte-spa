import axios from "axios";
import { API_URL } from "./api.url";

let url = API_URL + "/auth/";

export async function login(email: string, password: string) {
  return await axios.post(url + "login", {
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
