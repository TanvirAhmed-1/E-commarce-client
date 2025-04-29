
const instanceSecure = axios.create({
    baseURL: "http://localhost:5173",
  });
const useAxiosSecure = () => {
    return instanceSecure
};

export default useAxiosSecure;