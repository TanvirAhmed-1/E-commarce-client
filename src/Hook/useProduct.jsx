import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = (sort="", search="") => {
  const[products,setProducts]=useState([])
  const[loading,setloader]=useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/products?sort=${sort}&search=${search}`)
    .then(res=>{
      console.log(res.data)
      setProducts(res.data)
      setloader(false)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }, [sort, search,]);



  return [products,loading];
};

export default useProduct;
