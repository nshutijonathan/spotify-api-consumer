import http from "../services/httpService";
import logoutEndPointUrl from "../config.json";
export const logout = () => {
  console.log("kkkkk");
  http.get(`${logoutEndPointUrl}`);
};
