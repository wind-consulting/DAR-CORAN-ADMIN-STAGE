import http from "../http-common";
class FormService {
  getAll() {
    return http.get("/get-all-form");
  }
  create(data) {
    return http.post("/add-new-form", data);
  }
  
  deleteAll() {
    return http.delete("/remove-form");
  }
  
}
export default new FormService();