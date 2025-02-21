import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bend.ictdirectory-eg.com/api/",
});

export default axiosInstance;
