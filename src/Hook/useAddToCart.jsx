
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosPublic from "./AxiosPublic";
import useOrderTanStackQuery from "./useOrderTanStackQuery";
import { useState } from "react";

const useAddToCart = () => {
  const axiosPublic = AxiosPublic();
  const [pAddLoading, setPAddLoading] = useState(false);
  const navigation = useNavigate();
  const [order, refetch] = useOrderTanStackQuery();

  const handleAddToCart = async (product, users) => {
    if (!users) {
      navigation("/login");
      return;
    }

    setPAddLoading(true);

    const { _id, ...data } = product;
    const sendData = {
      orderId: _id,
      ...data,
    };

    try {
      const res = await axiosPublic.post("/addToCard", sendData);
      refetch();
      if (res.data.insertedId) {
        setPAddLoading(false);
        navigation("/yourOrder")
        
      }
    } catch (err) {
      setPAddLoading(false);
      if (err.message === "Request failed with status code 500") {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Already Added to Wishlist!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        console.error("Add to cart failed", err);
      }
    }
  };

  return { handleAddToCart, pAddLoading };
};

export default useAddToCart;
