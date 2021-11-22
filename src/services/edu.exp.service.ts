import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL;

export async function addEducation(
  userId: string | number,
  institution: string,
  startDate: string,
  endDate: string
) {
  return await axios.post(
    url + "/education/" + userId,
    { institution, startDate, endDate },
    { headers: authHeader() }
  );
}

export async function deleteEducation(id: string | number) {
  return axios.delete(url + "/education/" + id, { headers: authHeader() });
}

export async function addExperience(
  userId: string | number,
  institution: string,
  startDate: string,
  endDate: string
) {
  return await axios.post(
    url + "/experience/" + userId,
    { institution, startDate, endDate },
    { headers: authHeader() }
  );
}

export async function deleteExperience(id: string | number) {
  return axios.delete(url + "/experience/" + id, { headers: authHeader() });
}
