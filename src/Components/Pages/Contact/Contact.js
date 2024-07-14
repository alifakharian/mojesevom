import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="w-100 bg-[#cda236] h-[3px] container-fluid mx-auto text-center"></div>
      <div
        className="bg-[#313131ea] p-5 flex flex-wrap justify-around container-fluid w-full text-white"
        dir="rtl"
      >
        <div className="sm:w-[33%] pr-2 flex flex-col align-items-center flex-wrap">
        <p className="">تماس</p>
        <p className="w-[38px] h-[2px] mt-[3px] bg-[#cda236]"></p>
        <p className="mt-3 tracking-[0.1rem]">09121275782</p>
        <p className="mt-[60px]">آدرس :</p>
        <p className="mt-2 tracking-[0.05rem]">جردن کوچه بابک مرکزی پلاک 5/1 واحد 52</p>
        </div>


        <div className="sm:w-[33%] pr-2 flex flex-col align-items-center flex-wrap">
        <p className="tracking-[0.05rem] hover:text-[#cda236] duration-700">دستگاه اسپرسو صنعتی</p>
        <p className="mt-4 hover:text-[#cda236] duration-700 tracking-[0.05rem]">دستگاه اسپرسو دست دوم</p>
        <p className="mt-4 hover:text-[#cda236] duration-700 tracking-[0.05rem]">راه اندازی کافی شاپ</p>
        <p className="mt-4 hover:text-[#cda236] duration-700 tracking-[0.05rem]">دستگاه رست قهوه</p>
        <p className="mt-4 hover:text-[#cda236] duration-700 tracking-[0.05rem]"></p>
        <p className="mt-4 hover:text-[#cda236] duration-700 tracking-[0.05rem]"></p>
        </div>

        
        <div className="sm:w-[33%] pr-2 flex flex-col align-items-center flex-wrap">
        <p className="">آخرین مطلب</p>
        <p className="w-[87px] h-[2px] mt-[3px] bg-[#cda236]"></p>
        <Link className="mt-[50px] hover:text-[#cda236] duration-700 tracking-[0.05rem]" to="/barista">باریسا چیست</Link>
        <Link className="mt-[15px] hover:text-[#cda236] duration-700 tracking-[0.05rem]" to="/sirop">سیروپ چیست</Link>
        
        </div>
        
      </div>
    </>
  );
};

export default Contact;
