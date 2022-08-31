import http from "../http-common";
class TutorialDataService {
  registre(data) {
    return http.get("/register",data);
  }
  login(data) {
    return http.post("/login", data);
  }
 
}
export default new TutorialDataService();