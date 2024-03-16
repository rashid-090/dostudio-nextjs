"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import {TestimonialData} from '../../constant/data'

const Testimonials = () => {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-10 relative h-full w-12/12 xl:w-11/12 mx-auto bg-white overflow-hidden">
    <h1 className="text-4xl md:text-5xl  font-semibold pb-10 text-black text-center">
         Testimonials
      </h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
        onInit={() => setInit(true)}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-10 w-[90%]"
      >
        {/* swiper content */}
        {TestimonialData?.map((data,i)=>(
            <SwiperSlide className="text-center space-y-3 relative py-20" key={i}>
                <PiQuotesFill className="text-gray-300 text-5xl absolute top-0 left-0 rotate-180"/>
                <PiQuotesFill className="text-gray-300 text-5xl absolute bottom-0 right-0"/>
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-sm ">{data.descrption}</p>
                <p className="text-sm font-semibold">{data.name}</p>
                <a href={data.link} target="_blank" className="hover:underline"><p className="text-xs">{data.design}</p></a>
            </SwiperSlide>
        ))}
        {/* swiper content */}
      </Swiper>
      {/* Navigations */}
      <div className="hidden w-full xl:flex justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
        <button className="absolute left-5" ref={prevRef}>
          <MdKeyboardDoubleArrowLeft className="text-2xl" />
        </button>
        <button className="absolute right-5" ref={nextRef}>
          <MdKeyboardDoubleArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;