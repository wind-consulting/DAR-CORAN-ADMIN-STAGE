import http from "../http-common";
class DepenseService {
  getAll() {
    return http.get("/get-all-depenses");
  }
  create(data) {
    return http.post("/create-depense", data);
  }
  update( data) {
    return http.put(`/update-depense/${id}`, data);
  }
  
  deleteAll() {
    return http.delete(`/delete-depense`);
  }
  
}
export default new DepenseService();