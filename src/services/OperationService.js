import axios from "axios";

class OperationService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/operations";
  }

  async getAllOperations() {
    return await axios.get(this.baseUrl).then((response) => response.data);
  }

  async postOneOperation(operation) {
    return await axios.post(this.baseUrl, operation).then((resp) => resp.data);
  }

  async deleteOneOperation(id) {
    const url = this.baseUrl + "/" + id;
    return await axios.delete(url);
  }

  async deleteAllOperations() {
    const url = this.baseUrl;
    return await axios.delete(url);
  }
  
}
export default OperationService;