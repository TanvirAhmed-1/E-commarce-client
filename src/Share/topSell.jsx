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
import useAddToCart from "../Hook/useAddToCart";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useContext } from "react";
import Loader from "../Pages/Home/Loader";

const NewProduct = () => {
  const [products, loading] = useProduct();
    const { users } = useContext(AuthContext);
  const { handleAddToCart, pAddLoading } = useAddToCart();


  const HandleAddToCart=(products)=>{
     handleAddToCart(products, users);
  }
  if (loading) return <LoadingPage />;

  const newProducts = products.filter(
    (product) => product.display === "Top Sell"
  );

  return (
    <div className="py-6  lg:px-10 md:w-10/12 mx-auto">
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
            <div className="bg-white border-solid border-gray-200 border-2  rounded-xl shadow-md overflow-hidden flex flex-col gap-3 md:flex-row h-full hover:shadow-lg transition px-6 py-6">
              <div className="md:w-1/2 overflow-hidden rounded-md">
                <img
                  src={product.image1}
                  alt={product.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 px-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
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
                  <Link onClick={()=>HandleAddToCart(product)} className="btn btn-sm btn-primary px-4 py-3 rounded-br-3xl transition-all duration-300  transform  hover:rounded-lg">
                    Buy Now
                  </Link>

                  <Link
                    to={`/ProductDetails/${product._id}`}
                    className="btn btn-sm btn-outline btn-secondary px-4 py-4 hover:rounded-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {pAddLoading && <Loader />}
    </div>
  );
};

export default NewProduct;
