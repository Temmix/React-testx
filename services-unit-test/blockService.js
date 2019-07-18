import http from "./httpService";
import { server } from "../config.json";

const apiEndPoint = server.sqmdata;
const sandBoxApiEndPoint = server.sqmdataSandbox;

export const get = (brandId, blockId) =>
  http.get(`${apiEndPoint}/${brandId}/${blockId}`);

export const update = (brandId, blockId, updatedBlock) =>
  http.put(`${apiEndPoint}/${brandId}/${blockId}`, updatedBlock);

export const signOff = (brandId, blockId) =>
  http.patch(`${apiEndPoint}/${brandId}/${blockId}/sign-off`);

export function signOffSandBoxBlock(blockName) {
  return http.patch(
    `${sandBoxApiEndPoint}/a73a82ad-5819-4871-a777-637e7d3e56af/${blockName}/sign-off`
  );
}

export function revertSandBoxBlock(brandId, blockId) {
  brandId = "a73a82ad-5819-4871-a777-637e7d3e56af";
  blockId =
    "service-matter-availabilities/ace484b6-07b5-4a51-9dca-f5ea33552d64";
  return http.patch(`${sandBoxApiEndPoint}/${brandId}/${blockId}/revert`);
}
