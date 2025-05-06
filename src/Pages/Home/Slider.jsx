import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/img/IMG1.jpg"
import img2 from "../../assets/img/IMG2.jpg"
import img3 from "../../assets/img/IMG3.jpeg"
import img4 from "../../assets/img/IMG4.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} className="object-cover overflow-hidden w-full" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={img2} className="object-cover overflow-hidden w-full" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={img3} className="object-cover overflow-hidden w-full" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={img4} className="object-cover overflow-hidden w-full" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
