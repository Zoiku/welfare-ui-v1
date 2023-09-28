import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Slider.css";

const Slider = ({ className, slides, spaceBetween = 1, slidesPerView = 1 }) => {
  return (
    <Swiper
      className={className}
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
      }}
    >
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
