import http from "./httpService";
import { profileUrl } from "../config.json";

const getAll = profileUrl + "/";

export function getUsers() {
  return http.get(getAll);
}
export function getMe(email) {
  return http.get(profileUrl + "/user/" + email);
}
export function updateMe(me) {
  return http.put(profileUrl + "/user", me);
}
export function deleteUser() {}
