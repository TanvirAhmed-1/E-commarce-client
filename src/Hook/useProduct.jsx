import { useEffect, useState } from "react";
import AxiosPublic from "./AxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const axiosSecure = AxiosPublic();

  // Use useQuery properly to fetch the product data
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  return [products, refetch];
};

export default useProduct;
