import http from "./httpService";
import { server, authorization } from "../config.json";
import qs from "qs";

const authEndPoint = server.auth + "/sqm-oauth/oauth2/token";
const tokenKey = "token";

export async function login(username, password) {
  const { data: jwt } = await http.post(
    server.auth + "/ui-oauth-provider/oauth2/authorize",
    qs.stringify({
      username: username,
      password: password,
      grant_type: "password",
      client_id: authorization.clientid,
      scope: "opendata"
    })
  );
  localStorage.setItem(tokenKey, jwt.access_token);
}

export async function ssologin(username, password) {
  logout();
  try {
    const { data: jwt } = await http.post(
      authEndPoint,
      qs.stringify({
        grant_type: "password",
        client_id: authorization.clientid,
        scope: "opendata",
        password: password,
        username: username
      })
    );
    if (jwt.access_token) localStorage.setItem(tokenKey, jwt.access_token);
  } catch (_) {
    // console.log
  }
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    return localStorage.getItem(tokenKey);
  } catch (ex) {
    return null;
  }
}

export function isViewer() {
  return false;
}

export default {
  login,
  getCurrentUser,
  logout,
  isViewer
};
