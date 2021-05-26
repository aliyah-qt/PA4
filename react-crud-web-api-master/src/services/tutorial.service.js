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

  filterPublished(){
    return http.get(`/teas/published`);
  }

  filterPending(){
    return http.get(`/teas/pending`);
  }

  filterMilk(){
    return http.get(`/teas/milk`);
  }

  filterFruit(){
    return http.get(`/teas/fruit`);
  }

}

export default new TutorialDataService();