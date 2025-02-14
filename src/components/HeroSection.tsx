"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
