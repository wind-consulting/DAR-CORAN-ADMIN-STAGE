import http from "../http-common";
class StudentService {
  getAllStudents() {
    return http.get("/get-all-students");
  }
  createStudent(data) {
    return http.post("/create-student", data);
  }
  update( data) {
    return http.put(`/update-student/${id}`, data);
  }
  
  deleteAll() {
    return http.delete(`/delete-student`);
  }
  
}
export default new StudentService();