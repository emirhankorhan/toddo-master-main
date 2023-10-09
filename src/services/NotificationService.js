import axios from "axios";

class NotificationService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/notifications";
  }

  async getAllNotifications() {
    return await axios.get(this.baseUrl).then((response) => response.data);
  }

  async createOneNotification(notification) {
    return await axios.post(this.baseUrl, notification).then((resp) => resp.data);
  }

  async deleteAllNotifications() {
    const url = this.baseUrl;
    return await axios.delete(url);
  }
  
}
export default NotificationService;