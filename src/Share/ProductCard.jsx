import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import AxiosPublic from "./../Hook/AxiosPublic";
import useTanStackQuery from "../Hook/useTanStackQuery";
import Swal from "sweetalert2";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [heard, setHeard] = useState(false);
  const [product, isLoading, refetch] = useTanStackQuery();
  const [order,refetchOrder]=useOrderTanStackQuery()
  const axiosPublic = AxiosPublic();
  const { _id, title, image, price, rating, shipping } = data;

  const HandleFavorite = async (data) => {
    console.log(data);
    try {
      const res = await axiosPublic.post("/favorite", data);
      console.log(res.data);
      refetch();
      if (res.data.acknowledged === true) {
        Swal.fire("Add to favorite List!");
      }
    } catch (err) {
      console.log(err);
      if (err.message === "Request failed with status code 500")
        Swal.fire("product All Ready Added!");
    }
  };

  const HandleAddToCard =async (data) => {
    console.log(data);

    const{ _id, ...data2}=data
   console.log(_id, data2)

   const sendData={
    orderId:_id,
    ...data2
   }

    try {
      const res = await axiosPublic.post("/addToCard", sendData);
      console.log(res.data);
      refetchOrder();
      if (res.data.acknowledged === true) {
        Swal.fire("Product Successfully Added!");
      }
    } catch (err) {
      console.log(err);
      if (err.message === "Request failed with status code 500")
        Swal.fire("Product All Ready Added!");
    }
  };

  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 mx-auto">
      <div className="card transform transition-transform duration-300 hover:scale-105 bg-white shadow-sm">
        <figure className="relative w-full h-56 bg-gray-200 overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div
            onClick={() => setHeard(!heard)}
            className={`absolute top-2 right-2 rounded-full p-2 transition-colors duration-300 cursor-pointer`}
          >
            {heard ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart
                onClick={() => HandleFavorite(data)}
                className="text-black text-2xl"
              />
            )}
          </div>
        </figure>

        <div className="card-body p-4">
          <h2 className="card-title text-black text-base md:text-lg">
            {title}
          </h2>

          <div className="flex justify-between">
            <p className="text-black font-bold text-lg">Shipping</p>
            <span className="text-lg">
              {shipping == "Free" ? (
                <span className="text-green-500">Free</span>
              ) : (
                <span className="text-black">40</span>
              )}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-black font-bold text-lg">Price</p>
            <span className="border-2 text-black border-green-400 px-4 py-1 rounded-2xl">
              ${price}
            </span>
          </div>

          <div className="card-actions justify-between items-center mt-3">
            <button
              onClick={() => HandleAddToCard(data)}
              className="btn badge-outline text-white border-none hover:bg-green-700 bg-green-500 rounded-xl cursor-pointer "
            >
              Add To Cart
            </button>
            <Link to={`/ProductDetails/${_id}`}
              className="btn badge-outline text-white border-none hover:bg-green-700 bg-green-500 rounded-xl cursor-pointer "
            >
              Details
            </Link>
            <div className="flex items-center">
              <div className="rating rating-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={i === Math.round(rating)}
                    readOnly
                  />
                ))}
              </div>
              <span className="text-black text-sm ml-2">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
