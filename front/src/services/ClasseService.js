import http from "../http-common";
class ClasseService {
  getAllClasses() {
    return http.get("/get-all-classes");
  }
  create(data) {
    return http.post("/create-classe", data);
  }
  update(id, data) {
    return http.put(`/update-classe/${id}`, data);
  }
  
  deleteAll() {
    return http.delete(`/delete-classe/${id}`);
  }
  
}
export default new ClasseService();