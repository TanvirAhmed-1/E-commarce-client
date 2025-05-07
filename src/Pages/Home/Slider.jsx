import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "../../assets/Slider/img10.jpg";
import img2 from "../../assets/Slider/img11.jpg";
import img4 from "../../assets/Slider/8852975.jpg";
import img5 from "../../assets/Slider/img7.jpg";
import img6 from "../../assets/Slider/9772897.jpg";
import img7 from "../../assets/Slider/img9.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { image: img1, title: "Shop the Latest Trends" },
  { image: img2, title: "Unbeatable Prices Daily" },
  { image: img4, title: "Your Style, Our Passion" },
  { image: img5, title: "Upgrade Your Look" },
  { image: img6, title: "Fresh Deals, Every Day" },
  { image: img7, title: "New Arrivals Just for You" },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full md:h-[600px] h-[300px]">
            <img src={slide.image} className="object-cover w-full h-full" alt="slider" />
            {activeIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 text-center px-4"
              >
                <div className="space-y-4">
                  <p className="text-white text-xl md:text-4xl font-bold drop-shadow-md">
                    {slide.title}
                  </p>
                  <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-xl text-white text-sm md:text-lg">
                    Order Now!
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
