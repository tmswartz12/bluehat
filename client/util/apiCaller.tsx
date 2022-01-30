import axios from "axios";
import { getAuthCookie } from "./cookies";
import Cookies from "js-cookie";

let baseURL =
  process.env.NODE_ENV !== "development" ? "" : "http://localhost:8080";

export async function apiCaller(endpoint, method = "get", body) {
  let c = getAuthCookie();

  let headers;
  if (c && c.token) {
    headers = {
      "content-type": "application/json",
      authorization: c.token,
      "X-Forwarded-Host": window.location.host,
    };
    headers.authorization = c.token; // Token from cookie
  } else {
    headers = { "content-type": "application/json" };
  }

  const data = await axios({
    url: `${baseURL}/${endpoint}`,
    method,
    headers,
    data: body,
  });
  return data;
}
