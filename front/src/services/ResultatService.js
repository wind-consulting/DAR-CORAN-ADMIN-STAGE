import http from "../http-common";
class ResultatService {
  getAllResultats() {
    return http.get("/get-all-resultats");
  }
  create(data) {
    return http.post("/create-resultat", data);
  }
  update( data) {
    return http.put(`/update-resultat/${id}`, data);
  }
  
  deleteAll(data) {
    return http.delete(`/delete-resultat/${id}`,data);
  }
  
}
export default new ResultatService();