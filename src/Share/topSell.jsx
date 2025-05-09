import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import useProduct from "../Hook/useProduct";
import LoadingPage from "./../Pages/Home/LoadingPage";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";

const NewProduct = () => {
  const [products, loading] = useProduct();

  if (loading) return <LoadingPage />;

  const newProducts = products.filter(
    (product) => product.shipping === "Top Sell"
  );

  return (
    <div className="py-10 px-4 lg:px-16 md:w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Top Selling Products
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        keyboard={{ enabled: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper w-full md:h-[44vh]"
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col gap-3 md:flex-row h-full hover:shadow-lg transition">
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 md:h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 px-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-lg text-primary font-bold">
                      ${product.price}
                    </p>
                    <p className="line-through text-xl text-gray-400">
                      ${parseInt(product.price) + 100}
                    </p>
                  </div>
                  <div className="flex items-center text-yellow-500 text-sm mb-2">
                    {Array.from({ length: Math.round(product.rating) }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                    <span className="text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-green-500 font-medium text-xs  flex items-center gap-3">
                    <LiaOpencart className="text-3xl" /> Available
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="btn btn-sm btn-primary px-4">
                    Buy Now
                  </button>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-sm btn-outline btn-secondary px-4"
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
