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

export async function getProfileById(id: number | string) {
  return await axios.get(url + id);
}

export async function deleteProfileAndUser(id: number | string) {
  return await axios.delete(url + id, { headers: authHeader() });
}

export async function updateProfile(
  id: number | string,
  firstName: string,
  lastName: string,
  profilePicture: string,
  type: string,
  description: string,
  price: string,
  phoneNumber: string,
  sector: string,
  address: string
) {
  return await axios.patch(
    url + id,
    {
      firstName,
      lastName,
      profilePicture,
      type,
      description,
      price,
      phoneNumber,
      sector,
      address,
    },
    { headers: authHeader() }
  );
}
