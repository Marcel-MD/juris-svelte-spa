import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL + "/appointments/";

export async function getAppointments() {
  return await axios.get(url, { headers: authHeader() });
}

export async function createAppointment(
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  description: string,
  id: number | string
) {
  return await axios.post(url + id, {
    email,
    firstName,
    lastName,
    phoneNumber,
    description,
  });
}

export async function acceptAppointment(id: number | string) {
  return await axios.put(
    url + id,
    { something: "something" },
    { headers: authHeader() }
  );
}

export async function deleteAppointment(id: number | string) {
  return await axios.delete(url + id, { headers: authHeader() });
}
