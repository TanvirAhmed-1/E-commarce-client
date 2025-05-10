import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = (sort="", search="", range="") => {
  const[products,setProducts]=useState([])
  const[loading,setLoader]=useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/products?sort=${sort}&search=${search}&min=${range[0]}&max=${range[1]}`)
    .then(res=>{
      console.log(res.data)
      setProducts(res.data)
      setLoader(false)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }, [sort, search,range]);



  return [products,loading];
};

export default useProduct;
