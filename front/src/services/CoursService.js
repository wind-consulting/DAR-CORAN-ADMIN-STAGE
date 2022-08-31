import http from "../http-common";
class CoursService {
  getAll() {
    return http.get("/get-all-courses");
  }
  create(data) {
    return http.post("/create-cour", data);
  }
  
  deleteAll() {
    return http.delete(`/delete-course/${id}`,data);
  }
  
}
export default new CoursService();