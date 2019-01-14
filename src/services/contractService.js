import http from "./httpService";
import { contractUrl } from "../config.json";

/* function contractUrl(id) {
  return `${contractUrl}/${id}`;
} */
const tokenKey = "token";
http.setJwt(getJwt());

export function getContracts() {
  return http.get(contractUrl + "/all");
}

export function getContract(contractId) {
  return http.get(contractUrl + "/" + contractId);
}

export function saveContract(contract) {
  http.setJwt(getJwt());
  if (contract._id) {
    const body = { ...contract };
    //delete body._id;
    return http.put(contractUrl + "/", body);
  }

  return http.post(contractUrl + "/new", contract);
}

export function deleteContract(contractId) {
  return http.delete(contractUrl(contractId));
}
export function approveContract(contractId) {
  http.setJwt(getJwt());
  return http.put(contractUrl + "/approve/" + contractId);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
