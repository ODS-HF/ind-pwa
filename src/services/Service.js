import axios from "axios";

const Service = axios.create({
  baseURL: "https://nimbus.sandbox.ibl.hyperface.co",
  validateStatus: function (status) {
    return true;
  },
});

export default Service;
