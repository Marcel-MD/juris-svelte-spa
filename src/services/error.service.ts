export function catchError(error) {
  try {
    return error.response.data.message || error.message || error.toString();
  } catch {
    return "Network Error!";
  }
}
