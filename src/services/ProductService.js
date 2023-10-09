import axios from "axios";

class ProductService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/products";
  }

  async getAllProducts() {
    return await axios.get(this.baseUrl).then((response) => response.data);
  }

  async postOneProduct(product) {
    return await axios.post(this.baseUrl, product).then((resp) => resp.data);
  }

  async putOneProduct(id, product) {
    const url = this.baseUrl + "/" + id;
    return await axios.put(url, product).then((resp) => resp.data);
  }

  async deleteOneProduct(id) {
    const url = this.baseUrl + "/" + id;
    return await axios.delete(url);
  }

  async deleteAllProducts() {
    const url = this.baseUrl;
    return await axios.delete(url);
  }
  
}
export default ProductService;