import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL + "/users/";

export async function createUser(email: string, password: string) {
  return await axios.post(url, {
    email,
    password,
  });
}

export async function getUsers() {
  return await axios.get(url, { headers: authHeader() });
}

export async function getUserById(id: number) {
  return await axios.get(url + id, { headers: authHeader() });
}

export async function deleteUserById(id: number) {
  return await axios.delete(url + id, { headers: authHeader() });
}
