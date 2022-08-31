import http from "../http-common";
class UserService {
  registre(data) {
    return http.post("/register",data);
  }
  login(data) {
    return http.post("/login", data);
  }
 
}
export default new UserService();