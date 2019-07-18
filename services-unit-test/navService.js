import http from "./httpService";
import { server } from "../config.json";

const navEndPoint = server.auth + "/ob-opendata/brands?summary=true";

export function getNavigations() {
  return http.get(navEndPoint);
}
