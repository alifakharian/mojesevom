import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import asiyab from "./Asiyab.module.css";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Asiyab = () => {
  return (
    <div className="">
      <h1
        className={`${asiyab.title} text-[#cda236] mt-3 text-[25px] text-center mb-5`}
      >
        انواع آسیاب
      </h1>
      <Swiper
        slidesPerView={8}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          50: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
          1100: {
            slidesPerView: 6,
            spaceBetween: 100,
          },
          1289: {
            slidesPerView: 7,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination]}
        className={`${asiyab.myswiper2}`}
      >
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/1.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1   font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/2.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1   font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/3.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1 font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/4.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1  font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/5.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1  font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/7.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1  font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/8.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1   font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/9.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1   font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${asiyab.singleslider} border-[2px] border-gray-300 duration-700 hover:border-gray-500  rounded-xl`}
          >
            <div className="size-[190px] p-3 opacity-75 duration-700 mx-auto">
              <img
                src={require("../Images/asiyab/1.webp")}
                className="w-full 
              mx-auto h-full"
              />
            </div>
            <p className="text-[14px] text-gray-400 duration-700 pb-1  font-black">
              <span>AR110830</span>آسیاب مولینکس مدل{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Asiyab;
