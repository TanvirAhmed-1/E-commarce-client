import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = (sort = "", search = "", range = [0, 5000], ascending = "", delete1) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoader] = useState(true);

  const rangeKey = `${range[0]}-${range[1]}`; 

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/products?sort=${sort}&search=${search}&min=${range[0]}&max=${range[1]}&ass=${ascending}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [sort, search, ascending, rangeKey ,delete1]); 

  return [products, loading];
};

export default useProduct;
