import axios from "axios";

export default {
  create: function (data) {
    console.log("axios data " + data);
    return axios.post("/api/users", data);
  },
};
