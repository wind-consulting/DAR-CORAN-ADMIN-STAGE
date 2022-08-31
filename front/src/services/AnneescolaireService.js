import http from "../http-common";
class AnneescolaireService {
  getAll() {
    return http.get("/get-all-anneescolaires");
  }
  create(data) {
    return http.post("/create-anneescolaires", data);
  }
  update(id, data) {
    return http.put(`/update-anneescolaires/${id}`, data);
  }
  
  deleteAll() {
    return http.delete("delete-anneescolaires");
  }
  
}
export default new AnneescolaireService();