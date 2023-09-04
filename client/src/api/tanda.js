import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data now create", data.data);
    return axios.post("/api/users/tanda/", data.data);
  },
  findByUid: function (data) {
    const uid = data.uid;
    return axios.get("/api/users/tanda/" + uid);
  },
  findById: function (data) {
    const uid = data.uid;
    return axios.get("/api/perfil/my-tanda/" + id);
  },
  getAll: function () {
    return axios.get("/api/users/tanda");
  },
  findCreatedBY: function (id) {
    console.log("axios mis tandas", id);

    return axios.get("/api/users/tanda/mis-tandas/" + id);
  },
};
