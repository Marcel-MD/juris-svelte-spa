import axios from "axios";
import authHeader from "./auth.header";
import { API_URL } from "./api.url";
import type { Sort } from "./enum.service";

let url = API_URL + "/profiles/";

export async function getProfiles(
  price: Sort,
  rating: Sort,
  page: number,
  type: any,
  loc: any
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
