import axios from "axios";

// Export an object containing methods used for accessing Random User API
// https://randomuser.me/

export default {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/");
  }
};
