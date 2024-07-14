import { Button } from "flowbite-react";

const Footerup = () => {
  return (
    <>
      <div className="container-fluid bg-red-500 flex flex-wrap justify-between" dir="rtl">
       
        <div className="flex flex-col flex-wrap gap-y-2">
          <div className="mt-4 text-white mr-[20px]   ">
            اگر میخواهید کافه خودتان را راه اندازی کنید با ما تماس بگیرید
          </div>
          <div className="mr-[20px] text-white">
            جهت مشاوره رایگان با شماره 09121275782 تماس بگیرید
          </div>
        </div>
        <Button color="dark" className="p-3 m-3">جهت مطالعه بیشتر کلیک کنید</Button>
      </div>
    </>
  );
};

export default Footerup;
