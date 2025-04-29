import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const [heard, setHeard] = useState(false);
  const { _id, title, image, price, rating, shipping } = data;

  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 mx-auto">
      <div className="card bg-white shadow-sm">
        <figure className="relative w-full h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div
            onClick={() => setHeard(!heard)}
            className={`absolute top-2 right-2 rounded-full p-2 transition-colors duration-300 cursor-pointer`}
          >
            {heard ? (
              <FaHeart className="text-red-400 text-2xl" />
            ) : (
              <FaRegHeart className="text-black text-2xl" />
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
              {shipping === "Free" ? (
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
            <div className="btn badge-outline text-black rounded-xl cursor-pointer hover:bg-green-200">
              Add To Cart
            </div>

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
