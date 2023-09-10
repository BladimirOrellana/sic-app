import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data now create", data);
    return axios.post("/api/posts", data);
  },
  findByUid: function (data) {
    const uid = data.uid;
    return axios.get("/api/user/posts/" + uid);
  },
  getAll: function () {
    return axios.get("/api/posts");
  },
};
