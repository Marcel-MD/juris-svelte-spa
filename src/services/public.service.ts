import axios from "axios";
import { API_URL } from "./api.url";

export async function getPublicContent() {
  return await axios.get(API_URL);
}
