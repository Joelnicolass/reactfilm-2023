import axios from "axios";

export const authApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
