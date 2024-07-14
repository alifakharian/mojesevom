import { useEffect, useState } from "react";
import mataleb from "./Mataleb.module.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [rotate, setRotate] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setRotate(false);
    },5000);
  }, []);
  return (
    <>
      <div className="sm:w-[30%] text-center mx-auto" dir="rtl">
        {rotate ? (
          <div
            className={`tracking-[0.1rem] duration-1000 ${mataleb.rotate} `}
          >
            مطالب جدید
          </div>
        ) : (
          <div
            className={`${mataleb.hidenrotate} duration-1000`}
          >
            مطالب جدید
          </div>
        )}
        <div className="flex  justify-center gap-y-[15px] flex-col">
          <Link className="text-gray-600 hover:bg-red-500 mr-3 mt-2 hover:text-white hover:rounded-full hover:p-1 duration-700" to="/barista">باریسا چیست </Link>
          <Link className="text-gray-600 hover:bg-red-500 mr-3  hover:text-white hover:rounded-full hover:p-1 duration-700" to="/sirop">سیروپ چیست</Link>
        </div>
      </div>
      {/* <p>lorem500</p> */}
    </>
  );
};

export default Products;
