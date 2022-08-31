import http from "../http-common";
class CartService {
 
  create(data) {
    return http.post("/add-product-cart", data);
  }

  deleteAll() {
    return http.delete(`/delete-product-cart`);
  }
  
}
export default new CartService();