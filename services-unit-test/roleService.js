import http from "./httpService";
import { server, role } from "../config.json";

const roleEndPoint = server.odata + "/user-roles";

export async function getRoles() {
  const { data: roles } = await http.get(roleEndPoint);
  localStorage.setItem("userRoles", JSON.stringify(roles));
}

function roleResolver(role) {
  const userRoles = JSON.parse(localStorage.getItem("userRoles"));
  return userRoles ? userRoles.indexOf(role) !== -1 : false;
}
