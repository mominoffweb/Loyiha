import Slide from "../assets/Slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, EffectFade, Pagination } from "swiper/modules";
import texo1 from "../assets/texnalogy1.png";
import texo2 from "../assets/texnalogy2.png";
import phone from "../assets/web-phone.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import { useState } from "react";
import { useEffect } from "react";
function Header() {
  return (
    <div className="Head  justify-center   py-5 px-10  items-center ">
      <div className="flex cursor-pointer  container   text-blue-900  max-md:hidden  text-xl font-semibold  justify-center items-center w-full h-16 p-5 rounded-full bg-white">
        <nav className="flex justify-center items-center gap-5  ">
          <a href="#МАГАЗИН" className=" active">
            МАГАЗИН{" "}
          </a>
          <div className="w-[2px] h-16 bg-slate-200"></div>
          <a href="#ОКОМПАНИИ" className="">
            О КОМПАНИИ
          </a>
          <div className="w-[2px] h-16 bg-slate-200"></div>
          <a href="#ПРОДУКЦИЯ" className="">
            ПРОДУКЦИЯ
          </a>
          <div className="w-[2px] h-16 bg-slate-200"></div>
          <a href="#УСЛУГИ" className="">
            УСЛУГИ
          </a>
          <div className="w-[2px] h-16 bg-slate-200"></div>
          <a href="# АКЦИИ И НОВОСТИ" className="">
            АКЦИИ И НОВОСТИ
          </a>
          <div className="w-[2px] h-16 bg-slate-200"></div>
          <a href="#ОБРАТНАЯ СВЯЗЬ" className="">
            ОБРАТНАЯ СВЯЗЬ
          </a>
        </nav>
      </div>

      <Swiper
        pagination={true}
        // navigation={true}
        spaceBetween={50}
        modules={[EffectCube, Pagination, Navigation]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" mt-14 swip flex justify-center items-center   py-[119px]">
            <div>
              <h1 className=" max-[500px]:text-3xl text-[50px] max-[375px]:w-[224px]   -tracking-tighter max-[375px]:ml-10 max-[375px]:text-[32px] text-[#0D4C93] font-medium">
                Анализатор <br /> ABL800 FLEX
              </h1>
              <p className="  max-[500px]:w-[335px]   mt-8  w-[680px] h-[163px] max-[375px]:text-[20px] max-[375px]:w-60   text-2xl font-normal leading-10 text-[#363535]">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="max-[500px]:w-[335px] h-[60px] max-sm:mt-[15rem]  w-[270px] but  mt-10 flex justify-center items-center rounded-[35px] btn  max-[375px]:h-[60px]   max-[375px]:w-64 max-[375px]:ml-10  ">
                <button className=" text-[#FFF] text-2xl font-medium leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
            <div className="Header ml-4">
              <img src={Slide} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" mt-14 swip flex justify-center items-center   py-[119px]">
            <div>
              <h1 className=" max-[500px]:text-3xl  max-[375px]:ml-10 max-[375px]:text-[32px] text-[50px]  -tracking-tighter text-[#0D4C93] font-medium">
                Аппарат ИК-лазерный МАКДЭЛ-09.1
              </h1>
              <p className=" max-[500px]:w-[335px] max-[375px]:text-[20px] max-[375px]:w-80 mt-8 w-[680px] h-[163px] text-2xl font-normal leading-10 text-[#363535]">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="max-[500px]:w-[335px] h-[60px] max-sm:mt-[15rem]  w-[270px] but  mt-10 flex justify-center items-center rounded-[35px] btn   max-[375px]:h-[60px]   max-[375px]:w-64 max-[375px]:ml-10 ">
                <button className="   text-[#FFF] text-2xl font-medium leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
            <div className="Header ml-4">
              <img src={texo1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" mt-15  swip flex justify-center items-center   py-[119px]">
            <div className="max-[375px]:mt-[-10rem]">
              <h1 className=" max-[500px]:text-3xl text-[50px]  max-[375px]:mt-10  max-[375px]:ml-10 max-[375px]:text-[32px]   -tracking-tighter text-[#0D4C93] font-medium">
                Глюкометр для <br /> измерения глюкозы
              </h1>
              <p className=" max-[500px]:w-[335px] mt-8 w-[680px] h-[163px] text-2xl font-normal leading-10 text-[#363535] max-[375px]:text-[20px] max-[375px]:w-80">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="max-[500px]:w-[335px] h-[60px] max-sm:mt-[15rem]  w-[270px] but  mt-10 flex justify-center items-center rounded-[35px] btn max-[375px]:h-[60px]   max-[375px]:w-64 max-[375px]:ml-10  ">
                <button className="   text-[#FFF] text-2xl font-medium leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
            <div className="Header ml-4">
              <img src={phone} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-[375px]:hidden ">
          <div className="   swip flex justify-center items-center   py-[119px]">
            <div>
              <h1 className=" max-[500px]:text-3xl text-[50px]  -tracking-tighter text-[#0D4C93] font-medium">
                Система для аутогемотрансфузии
              </h1>
              <p className=" max-[500px]:w-[335px] mt-8 w-[680px] h-[163px] text-2xl font-normal leading-10 text-[#363535]">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="max-[500px]:w-[335px] h-[60px] max-sm:mt-[15rem]  w-[270px] but  mt-10 flex justify-center items-center rounded-[35px] btn  ">
                <button className="   text-[#FFF] text-2xl font-medium leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
            <div className="Header ml-4">
              <img src={texo2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
