import http from '../http-common';

class ProjectService {
    getAll() {
        return http.get("/project/list/");
    }
    
    get(id) {
        return http.get(`/project/get/${id}/`);
    }
    
    create(data) {
        return http.post("/project/create/", data);
    }
    
    update(id, data) {
        return http.put(`/project/update/${id}/`, data);
    }
}

export default new ProjectService();