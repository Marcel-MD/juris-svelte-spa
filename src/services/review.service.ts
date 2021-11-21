import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL + "/reviews/";

export async function createReview(
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  description: string,
  rating: number,
  id: number | string
) {
  return await axios.post(url + id, {
    email,
    firstName,
    lastName,
    phoneNumber,
    description,
    rating,
  });
}

export async function deleteReview(id: number | string) {
  return await axios.delete(url + id, { headers: authHeader() });
}
