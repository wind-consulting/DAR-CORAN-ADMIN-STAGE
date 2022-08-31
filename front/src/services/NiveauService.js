import http from "../http-common";
class NiveauService {
  getAllNiveaux() {
    return http.get("/get-all-niveaux");
  }
  create(data) {
    return http.post("/create-niveau", data);
  }
  update( data) {
    return http.put(`/update-niveau/${id}`, data);
  }
  
  deleteAll() {
    return http.delete(`/delete-niveau`);
  }
  
}
export default new NiveauService();