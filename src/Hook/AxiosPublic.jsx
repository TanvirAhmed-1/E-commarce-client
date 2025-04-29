const instance = axios.create({
  baseURL: "http://localhost:5173",
});
const AxiosPublic = () => {
  return instance;
};

export default AxiosPublic;
