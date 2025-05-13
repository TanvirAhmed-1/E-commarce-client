import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosPublic from "../Hook/AxiosPublic";
import useTanStackQuery from "../Hook/useTanStackQuery";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import { LiaShoppingCartSolid } from "react-icons/lia";

const ProductCard = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [, , refetch] = useTanStackQuery();
  const [, refetchOrder] = useOrderTanStackQuery();
  const axiosPublic = AxiosPublic();
  const { _id, title, image1, price, rating, shipping } = data;

  const handleFavorite = async () => {
    try {
      const res = await axiosPublic.post("/favorite", data);
      refetch();
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 800
        });
        setLiked(true);
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 800
      });
    }
  };

  const handleAddToCart = async () => {
    const { _id, ...rest } = data;
    const sendData = { orderId: _id, ...rest };

    try {
      const res = await axiosPublic.post("/addToCard", sendData);
      refetchOrder();
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product successfully added to cart!",
          showConfirmButton: false,
          timer: 600
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Product already in cart!");
    }
  };

  return (
    <div className="w-full sm:w-72 md:w-80 mx-auto">
      <div className="bg-white rounded-2xl shadow-md  overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-60 bg-gray-100">
          <img src={image1} alt={title} className="object-cover w-full h-full" />
          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 hover:scale-105 duration-1000 group-hover:duration-100 bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition"
          >
            {liked ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-600 text-xl" />
            )}
          </button>
        </div>

        <div className="p-4 space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>

          <div className=" space-x-4">
            <span className="text-green-600 font-bold  text-lg">${price}</span>
            <span className="text-gray-600 line-through font-bold text-lg">${price+100}</span>
          </div>
          <div className="flex items-center justify-between">
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
              <span className="text-sm text-gray-600 ml-2">{rating}</span>
            </div>
          </div>

          <div className="flex justify-between px-2 items-center flex-row-reverse gap-3 pt-3">
            <button
              onClick={handleAddToCart}
              className="hover:bg-green-600 transform  hover:scale-105 text-green-400 rounded-full text-4xl group-hover:opacity-100 hover:text-white p-1 transition duration-1000 group-hover:duration-100"
            >
              <LiaShoppingCartSolid className="" />
            </button>
            <Link
              to={`/ProductDetails/${_id}`}
              className="bg-gray-800 hover:bg-black text-white py-2 px-3 rounded-xl text-sm font-semibold text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
