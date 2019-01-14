import http from "./httpService";
import { loginUrl } from "../config.json";

const addUser = loginUrl + "/add";
const getUsers = loginUrl + "/all";

export function register(user) {
  return http.post(addUser, user);
}
export function listUsers() {
  return http.get(getUsers);
}
export function deleteUser() {}
