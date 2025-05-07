import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

import useProduct from "../Hook/useProduct";
import LoadingPage from "./../Pages/Home/LoadingPage";
import { Link } from "react-router-dom";
import { FaStackExchange, FaStarAndCrescent } from "react-icons/fa";

const NewProduct = () => {
  const [products, loading] = useProduct();

  if (loading) {
    return <LoadingPage />;
  }

  const newProducts = products.filter((product) => product.shipping === "New");

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="w-full h-[44vh] "
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product._id} className="flex justify-center items-center px-10">
            <div className="card w-full px-4 bg-base-100 shadow-xl p-4 flex flex-col lg:flex-row gap-4">
              <figure className=" w-full h-80 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body w-full">
                <h2 className="card-title">{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}   </p>
                <p>{product.description}</p>
                <p className="text-green-600 font-medium mt-2">Details Available</p>
                <div className="card-actions justify-between mt-4">
                  <button className="btn btn-primary">Buy Now</button>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-outline btn-secondary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProduct;
