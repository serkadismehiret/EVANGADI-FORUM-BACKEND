import axios from "axios";

let axiosBase = axios.create({
  baseURL: "http://localhost:5500/api",
});

export default axiosBase;