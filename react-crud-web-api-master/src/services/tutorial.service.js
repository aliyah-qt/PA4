import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/teas");
  }

  get(id) {
    return http.get(`/teas/${id}`);
  }

  create(data) {
    return http.post("/teas", data);
  }

  update(id, data) {
    return http.put(`/teas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/teas/${id}`);
  }

  deleteAll() {
    return http.delete(`/teas`);
  }

  findByTitle(title) {
    return http.get(`/teas?title=${title}`);
  }
}

export default new TutorialDataService();