import axios from "axios";

class SettingService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/settings";
  }

  async getAllSettings() {
    return await axios.get(this.baseUrl).then((response) => response.data);
  }

  async postOneSetting(setting) {
    return await axios.post(this.baseUrl, setting).then((resp) => resp.data);
  }

  async updateOneSetting(id, newSetting) {
    const url = this.baseUrl + "/" + id;
    return await axios.put(url, newSetting).then((response) => response.data);
  }

  async deleteOneSetting(id) {
    const url = this.baseUrl + "/" + id;
    return await axios.delete(url);
  }
}
export default SettingService;