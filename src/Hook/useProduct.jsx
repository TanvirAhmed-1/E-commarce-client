import { useEffect, useState } from "react";
import AxiosPublic from "./AxiosPublic";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const axiosSecure = AxiosPublic();
  useEffect(() => {
    axiosSecure
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  return [products ];
};

export default useProduct;
