import http from "./httpService";
import { profileUrl } from "../config.json";
import { loginUrl } from "../config.json";

const getAll = profileUrl + "/";
const tokenKey = "token";

http.setJwt(getJwt());

export function getUsers() {
  return http.get(getAll);
}
export function getMe(email) {
  return http.get(profileUrl + "/user/" + email);
}
export function updateMe(me) {
  return http.put(profileUrl + "/user", me);
}
export function updateRole(body) {
  return http.put(loginUrl + "/role", body);
}
export function deleteUser() {}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}
