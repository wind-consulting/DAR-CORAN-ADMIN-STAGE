import http from "../http-common";
class TeacherService {
  getAllTeachers() {
    return http.get("/get-all-teachers");
  }
  createTeacher(data) {
    return http.post("/create-teacher", data);
  }
  updateTeacher(id, data) {
    return http.put(`/update-teacher/${id}`, data);
  }
  deleteTeacher(id,data) {
    return http.delete(`/teachers/${id}`,data);
  }
  deleteTeacher() {
    return http.delete(`/delete-teacher`);
  }
  
}
export default new TeacherService();