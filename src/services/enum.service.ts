import axios from "axios";
import { API_URL } from "./api.url";

let url = API_URL + "/profiles/";

export async function getTypes() {
  return await axios.get(url + "types");
}

export async function getSectors() {
  return await axios.get(url + "sectors");
}

export async function getCities() {
  return await axios.get(url + "cities");
}
