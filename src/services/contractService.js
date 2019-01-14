import http from "./httpService";
import { contractUrl } from "../config.json";

/* function contractUrl(id) {
  return `${contractUrl}/${id}`;
} */

export function getContracts() {
  return http.get(contractUrl + "/all");
}

export function getContract(contractId) {
  return http.get(contractUrl(contractId));
}

export function saveContract(contract) {
  if (contract._id) {
    const body = { ...contract };
    delete body._id;
    return http.put(contractUrl(contract._id), body);
  }

  return http.post(contractUrl, contract);
}

export function deleteContract(contractId) {
  return http.delete(contractUrl(contractId));
}
