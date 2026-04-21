import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const fetchCsrfToken = () => api.get("/csrf-token");

export default api;
