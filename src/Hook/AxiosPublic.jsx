import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-chi-teal-11.vercel.app",
});
const AxiosPublic = () => {
  return instance;
};

export default AxiosPublic;
