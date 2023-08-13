import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data now create", data);
    return axios.post("/api/users/tanda", data);
  },
  findByUid: function (data) {
    const uid = data.uid;
    return axios.get("/api/users/tanda/" + uid);
  },
  getAll: function () {
    return axios.get("/api/users/tanda");
  },
};
