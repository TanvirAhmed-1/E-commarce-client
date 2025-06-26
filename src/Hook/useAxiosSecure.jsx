import axios from "axios";
const instanceSecure = axios.create({
    baseURL: "https://server-chi-teal-11.vercel.app",
  });
const useAxiosSecure = () => {
    return instanceSecure
};

export default useAxiosSecure;