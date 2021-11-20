import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL + "/admin/";

export async function getUnverifiedProfiles() {
  return await axios.get(url + "unverified", { headers: authHeader() });
}

export async function verifieProfile(id: number | string) {
  return await axios.put(url + "verifie/" + id, {}, { headers: authHeader() });
}

export async function unverifieProfile(id: number | string) {
  return await axios.put(
    url + "unverifie/" + id,
    {},
    { headers: authHeader() }
  );
}
