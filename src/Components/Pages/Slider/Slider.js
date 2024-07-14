import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import slider from "./styles.module.css"
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide className="flex flex-wrap justify-center">
          <div className="size-[300px] mt-[20px]">
            <img
              src={require("../Images/Slider/2.png")}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-wrap" dir="rtl">
            <p className="titlefirstslider text-[30px] mx-auto text-red-600 ">
              عالی ایتالیایی، بسیار زیبا و خودکار
            </p>
            <p className="w-[315
              px] mt-4 text-gray-600 mx-auto text-right">
              موج سوم ساده ترین و بهترین تجربه و فناوری را برای شما به ارمغان می
              آورد
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap gap-x-[40px] justify-center">
          <div className="w-[340px] mt-[50px]">
            <img
              src={require("../Images/Slider/1.png")}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-wrap" dir="rtl">
            <p className="titlefirstslider text-[30px] mt-[40px] mx-[20px] text-red-600 ">
              طراحی، عملکرد را جشن می گیرد
            </p>
            <p className="w-[330px] mt-4 text-gray-600 mx-auto  text-right">
              ظرافت، قابلیت اطمینان و عملکرد بالا: بهترین سنت قهوه اسپرسو
              ایتالیایی
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap gap-x-[40px] justify-center">
          <div className="w-[500px] mt-[50px]">
            <img
              src={require("../Images/Slider/3.png")}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-wrap" dir="rtl">
            <p className="titlefirstslider text-[30px] mt-[40px]  text-red-600 ">
              GRINDER-DOSERS
            </p>
            <p className="w-[340px] mt-4 text-gray-600 mr-[90px]  text-right">
              آسیاب عالی، کیفیت بالا
            </p>
          </div>
        </SwiperSlide>{" "}
        
        <SwiperSlide className="flex flex-wrap gap-x-[40px] justify-center">
          <div className="w-[500px] mt-[50px]">
            <img
              src={require("../Images/Slider/4.png")}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-wrap" dir="rtl">
            <p className="titlefirstslider text-[30px] mt-[40px]  text-red-600 ">
              تجهیزات جانبی
            </p>
            <p className="w-[340px] mt-4 text-gray-600 mr-[150px]  text-right">
              کارایی بالا و طراحی مدرن
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
};

export default Slider;
