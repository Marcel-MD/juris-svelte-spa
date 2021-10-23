import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/users/";

export async function createUser(email: string, password: string) {
  return await axios.post(API_URL, {
    email,
    password,
  });
}

export async function getUsers() {
  return await axios.get(API_URL, { headers: authHeader() });
}

export async function getUserById(id: number) {
  return await axios.get(API_URL + id, { headers: authHeader() });
}

export async function deleteUserById(id: number) {
  return await axios.delete(API_URL + id, { headers: authHeader() });
}
