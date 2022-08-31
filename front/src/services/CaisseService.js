import http from "../http-common";
class CaisseService {
  getAll() {
    return http.get("/get-all-caisses");
  }
  create(data) {
    return http.post("/create-caisse", data);
  }
  update( data) {
    return http.put(`/update-caisse/${id}`, data);
  }
  
  deleteAll() {
    return http.delete(`/delete-caisse`);
  }
  
}
export default new CaisseService();