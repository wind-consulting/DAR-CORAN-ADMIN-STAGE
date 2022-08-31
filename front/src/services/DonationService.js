import http from "../http-common";
class DonationService {
 
  create(data) {
    return http.post("/add-new-donation", data);
  }
  getAllDonation(data){
  return http.post("/get-all-donation", data);
  }
}
export default new DonationService();