import axios from "axios";

const API = axios.create({
  baseURL: "http://contact-management-backend-suff.onrender.com/"
});

// Add token automatically if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
