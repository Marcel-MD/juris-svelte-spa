import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";

let url = API_URL + "/profiles/";

export async function getProfiles(
  page: number,
  type: string,
  loc: string,
  price: string,
  rating: string
) {
  return await axios.get(
    url +
      "filtered?price=" +
      price +
      "&rating=" +
      rating +
      "&page=" +
      page +
      "&type=" +
      type +
      "&loc=" +
      loc
  );
}
