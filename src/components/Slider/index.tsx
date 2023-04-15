import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderItem from "./SliderItem";
import SliderHeader from "./SliderHeader";
import { Container } from "./styles";

const Slider: React.FC = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={33}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            pagination: { enabled:true },

          },
          600: {
            slidesPerView: 3,
            pagination: { enabled:true },

          },

          400: {
            slidesPerView: 2,
            pagination: { enabled: false },
          },
          300: {
            slidesPerView: 1,
            pagination: { enabled: false },
          },
        }}
        className="container-swiper"
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
          enabled: true,
        }}
        pagination={{
          clickable: true,
          el: ".pagination-foda",
          enabled: true,
          bulletClass: "bolinha_foda",
          bulletActiveClass: "bolnhia-fodase",
          bulletElement: "span",
          dynamicBullets: true,
          renderBullet(index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
      >
        <SliderHeader />

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        {/* <SliderBody></SliderBody> */}
      </Swiper>
    </Container>
  );
};

export default Slider;
