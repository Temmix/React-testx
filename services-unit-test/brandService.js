import http from "./httpService";
import { server } from "../config.json";

const apiEndPoint = server.sqmdata;
const sandBoxApiEndPoint = server.sqmdataSandbox;

export const get = brandId => http.get(`${apiEndPoint}/${brandId}`);

export const update = (brandId, updatedBrand) =>
  http.put(`${apiEndPoint}/${brandId}`, updatedBrand);

export const signOff = brandId =>
  http.patch(`${apiEndPoint}/${brandId}/sign-off`);

export const revert = brandId => http.patch(`${apiEndPoint}/${brandId}/revert`);

export function signOffSandBoxBrand(brandId) {
  return http.patch(`${sandBoxApiEndPoint}/${brandId}/sign-off`);
}

export function revertSandBoxBrand(brandId) {
  return http.patch(`${sandBoxApiEndPoint}/${brandId}/revert`);
}

export function rejectBrand(brandId) {
  return http.patch(`${sandBoxApiEndPoint}/${brandId}`);
}

export function publishSandBoxBrand(brandId) {
  return http.patch(`${sandBoxApiEndPoint}/${brandId}/publish`);
}
