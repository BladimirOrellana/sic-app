import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data now create", data);
    return axios.post("/api/users", data);
  },
  findByEmail: function (data) {
    const email = data.email;
    return axios.get("/api/users/user/" + email);
  },
  getAll: function () {
    return axios.get("/api/users");
  },
};
