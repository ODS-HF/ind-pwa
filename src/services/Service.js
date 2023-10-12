import axios from "axios";

const Service = axios.create({
  baseURL: "https://nimbus.sandbox.ibl.hyperface.co",
  withCredentials: true,
});

export default Service;
