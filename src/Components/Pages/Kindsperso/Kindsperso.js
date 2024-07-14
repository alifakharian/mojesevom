import kindsperso from "./kindsperso.module.css";
const Kindsperso = () => {
  return (
    <div className="bg-[#dedddd41]">
    <div className="flex justify-center">
        <div className="w-[37%] h-[3.5px] ml-10 rounded-full bg-[#c4c3c2] mt-[50px]"></div>
    <h1
        className={`${kindsperso.headtitle} mx-auto text-center py-5 text-[#cda236] 2xl:text-[27px] xl:text-[18px] md:mt-[10px]`}
      >
        انواع دستگاه اسپرسوساز
      </h1>
      <div className="w-[37%] h-[3.5px] mr-10 rounded-full bg-[#c4c3c2] mt-[50px]"></div>

    </div>
      <div className="flex p-4  justify-between flex-wrap gap-y-[30px]">
        <div
          className="lg:w-[23%] bg-white shadow-2xl  rounded-xl border-[2.4px] border-[#c4c3c2]  flex flex-col flex-wrap justify-center align-items-center"
          dir="rtl"
        >
          <div>
            <img
              src={require("../Images/kindsperso/1.webp")}
              className="size-[280px] mx-auto rounded-2xl"
            />
          </div>
          <p
            className={`${kindsperso.title} text-center mt-2 text-[#cda236] text-[20px] ml-6 `}
          >
            بخار محور 
          </p>
          <p className="p-4 leading-[35px] text-[14px]">
            این روزها علاوه بر کافه‌ها دستگاه‌های مختلف اسپرسوساز در اداره‌ها و
            خانه‌ها نیز وجود دارد و این برای کسانی که نمی‌توانند در تایم کاری و
            یا در برخی ساعات به کافه بروند و اسپرسو مصرفی خود را تهیه کنند،
            بسیار عالی خواهد بود.
          </p>
        </div>

        <div
          className="lg:w-[23%] bg-white shadow-2xl  rounded-xl border-[2.4px] border-[#c4c3c2] flex flex-col flex-wrap justify-center align-items-center"
          dir="rtl"
        >
          <img
            src={require("../Images/kindsperso/2.webp")}
            className="size-[230px] mx-auto rounded-2xl"
          />
          <p
            className={`${kindsperso.title} text-center mt-2 text-[#cda236] text-[20px] ml-6 `}
          >
             اهرمی 
          </p>
          <p className="p-4 leading-[35px] text-[14px]">
            در این دستگاه برای درست کردن یک فنجان اسپرسو باید مقداری از قدرت
            دستتان استفاده کنید. دستگاه‌های اهرمی به دو شکل دستی و فنری در بازار
            وجود دارند.
          </p>
        </div>

        <div
          className="lg:w-[23%] bg-white shadow-2xl  rounded-xl border-[2.4px] border-[#c4c3c2]  flex flex-col flex-wrap justify-center align-items-center "
          dir="rtl"
        >
          <img
            src={require("../Images/kindsperso/3.jpg")}
            className="size-[260px] mx-auto rounded-2xl"
          />
          <p
            className={`${kindsperso.title} text-center mt-2 text-[#cda236] text-[20px] ml-6 `}
          >
             پمپی{" "}
          </p>
          <p className="p-4 leading-[35px] text-[14px]">
            این مدل سیستم قهوه‌ساز در دهه ۶۰ میلادی ارائه شدند و بازار را تحت
            کنترل خود درآوردند. سیستم این دستگاه به گونه‌ای است که آب نزدیک به
            نقطه جوش توسط یک پمپ الکترونیکی به داخل اتاقکی که برای دم کشیدن قهوه
            در نظر گرفته شده است، هدایت می شود.
          </p>
        </div>

        <div
          className="lg:w-[23%] bg-white shadow-2xl pt-10 rounded-xl border-[2.4px] border-[#c4c3c2]  flex flex-col  flex-wrap justify-center align-items-center"
          dir="rtl"
        >
          <img
            src={require("../Images/kindsperso/4.webp")}
            className="size-[260px] mx-auto pt-10 mt-5 rounded-2xl"
          />
          <p
            className={`${kindsperso.title} text-center mt-2 text-[#cda236] text-[20px] ml-6 `}
          >
             نیمه اتوماتیک 
          </p>
          <p className="p-4 leading-[35px] text-[14px]">
            ممکن است دستگاه‌های نیمه اتوماتیک اسپرسوساز همان چیزی باشد که شما
            مدام به آن فکر می‌کنید و نیاز دارید یکی از آن ها را برای کافه خود
            تهیه کنید. در این دستگاه سیستم هدایت آب کاملا خودکار است. اما آسیاب
            کردن قهوه، اندازه گیری، مشخص کردن مقدار قهوه برای هر شات اسپرسو و
            تنظیم زمان برای ساخت اسپرسو کاملا دستی انجام می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kindsperso;
