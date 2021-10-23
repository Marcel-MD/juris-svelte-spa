import axios from "axios";

const API_URL = "http://localhost:8080/";

export async function getPublicContent() {
  return await axios.get(API_URL);
}
