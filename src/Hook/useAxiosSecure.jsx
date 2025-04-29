import axios from "axios";
const instanceSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
const useAxiosSecure = () => {
    return instanceSecure
};

export default useAxiosSecure;