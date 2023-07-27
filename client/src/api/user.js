import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data " + data);
    return axios.post("/api/users", data);
  },
  getAll: function () {
    console.log("axios data ");
    return axios.post("/api/users");
  },
};
