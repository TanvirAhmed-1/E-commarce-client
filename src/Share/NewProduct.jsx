import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import useProduct from "../Hook/useProduct";
import LoadingPage from "./../Pages/Home/LoadingPage";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";

const NewProduct = () => {
  const [products, loading] = useProduct();

  if (loading) {
    return <LoadingPage />;
  }

  const newProducts = products.filter((product) => product.shipping === "New");

  return (
    <div className="py-10 px-4 lg:px-16 md:w-10/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        New Arrivals
      </h2>

      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="bg-base-100 shadow-lg rounded-xl overflow-hidden p-4 h-full flex flex-col justify-between">
              <figure className="w-full h-48 md:h-56 lg:h-60 overflow-hidden rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-1 mb-1">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-600 font-semibold">
                      ${product.price}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ${parseInt(product.price) + 100}
                    </span>
                  </div>

                  <div className="flex items-center text-yellow-500 text-sm mb-1">
                    {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span className="text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {product.description}
                  </p>

                  <p className="text-green-500 font-medium text-xs flex items-center gap-1">
                    <LiaOpencart className="text-lg" /> Available
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center gap-2">
                  <button className="btn btn-sm btn-primary bg-green-500 hover:bg-green-600">
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-sm btn-outline btn-secondary border-green-500 text-green-600 hover:bg-green-100"
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
