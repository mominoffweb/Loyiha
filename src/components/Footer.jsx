import Item1 from "../assets/BD.png";
import Item2 from "../assets/biosense.png";
import Item3 from "../assets/braun1.png";
import Item4 from "../assets/cordis.png";
import Item5 from "../assets/depuy.png";
import Item6 from "../assets/eth.png";
import Item7 from "../assets/ethicon.png";
import Item8 from "../assets/fote.png";
import location from "../assets/Location.svg";
import Phone from "../assets/Phone.svg";
import Email from "../assets/email.svg";
import Logo from "../assets/logo.svg";
import { FaPhoneVolume } from "react-icons/fa";
import { ImLocation } from "react-icons/Im";
import { BsFillEnvelopeFill } from "react-icons/Bs";
import { Link } from "react-router-dom";
import Create from "./Create";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import { useState } from "react";
import { useEffect } from "react";

function Footer() {
  return (
    <div id="ПАРТНЕРЫ">
      <div className="flex justify-center items-center">
        <a
          href="#ПАРТНЕРЫ"
          className="  text-[#0D4C93] text-[40px] font-medium  leading-normal"
        >
          ПАРТНЕРЫ
        </a>
      </div>
      <Swiper
        pagination={true}
        navigation={true}
        spaceBetween={50}
        modules={[EffectCube, Pagination, Navigation]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="max-sm:ml-[5rem]  max-sm:w-[600px] text-center grid grid-cols-4 py-14 gap-8 px-20 max-md:grid-cols-2">
            <div className="border  fox flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item3} alt="" />
            </div>

            <div className=" max-sm:hidden border fox1 foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item8} alt="" />
            </div>

            <div className=" max-sm:hidden border fox2  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item1} alt="" />
            </div>

            <div className=" max-sm:hidden border fox3  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item2} alt="" />
            </div>

            <div className="border fox4 foxs max-md:hidden flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item4} alt="" />
            </div>

            <div className="border fox5 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item5} alt="" />
            </div>

            <div className="border fox6 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item6} alt="" />
            </div>

            <div className="border fox7 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item7} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-sm:ml-[5rem]  max-sm:w-[600px] text-center grid grid-cols-4 py-14 gap-8 px-20 max-md:grid-cols-2">
            <div className="border  fox flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item3} alt="" />
            </div>

            <div className=" max-sm:hidden border fox1 foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item8} alt="" />
            </div>

            <div className=" max-sm:hidden border fox2  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item1} alt="" />
            </div>

            <div className=" max-sm:hidden border fox3  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item2} alt="" />
            </div>

            <div className="border fox4 foxs max-md:hidden flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item4} alt="" />
            </div>

            <div className="border fox5 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item5} alt="" />
            </div>

            <div className="border fox6 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item6} alt="" />
            </div>

            <div className="border fox7 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item7} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-sm:ml-[5rem]  max-sm:w-[600px] text-center grid grid-cols-4 py-14 gap-8 px-20 max-md:grid-cols-2">
            <div className="border  fox flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item3} alt="" />
            </div>

            <div className=" max-sm:hidden border fox1 foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item8} alt="" />
            </div>

            <div className=" max-sm:hidden border fox2  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item1} alt="" />
            </div>

            <div className=" max-sm:hidden border fox3  foxs flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item2} alt="" />
            </div>

            <div className="border fox4 foxs max-md:hidden flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item4} alt="" />
            </div>

            <div className="border fox5 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item5} alt="" />
            </div>

            <div className="border fox6 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item6} alt="" />
            </div>

            <div className="border fox7 foxs max-md:hidden  flex justify-center  items-center w-[275] h-[130] rounded-[30px] bg-[#FFF] ">
              <img className="" src={Item7} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="max-sm:flex-col flex footer_bg  py-14 justify-center items-center ">
        <div className="">
          <div className="flex max-sm:flex-col gap-9">
            <div className=" max-2xl:hidden max-sm:block ml-[5rem] flex justify-center items-center">
              <img src={Logo} alt="" />
            </div>
            <div>
              <h2 className="text-[#595959] text-[26px] font-medium leading-7">
                Контакты
              </h2>
            </div>
            <div className="flex gap-6">
              <div className="">
                <div className="flex gap-5">
                  <div className="w-[50px] h-[50px] cursor-pointer hover:bg-[#0D4C93] text-white  bg-[#fff] flex justify-center items-center rounded-3xl">
                    <ImLocation className="text-[30px] text-[#0D4C93] hover:text-white " />
                  </div>
                  <p className="text-[#5A5A5A] text-base font-normal leading-normal">
                    г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                  </p>
                </div>

                <div className="flex mt-9 max-md:mt-[5rem] text-[#0D4C93] gap-4">
                  <div className="w-[50px]  h-[50px] bg-[#fff]  cursor-pointer hover:bg-[#0D4C93]  flex justify-center items-center rounded-3xl">
                    <BsFillEnvelopeFill className="text-[30px] hover:text-white " />
                  </div>
                  <a
                    href="#"
                    className="text-[#5A5A5A] mt-2 text-base font-normal leading-normal"
                  >
                    info@medol.uz
                  </a>
                </div>
              </div>

              <div className="max-sm:mt-[12rem]  max-sm:ml-[-1rem]">
                <div className="flex max-md:mt-[4rem] gap-4 max-md:ml-[-15rem]">
                  <div className="w-[50px] cursor-pointer  hover:bg-[#0D4C93] text-white h-[50px] bg-[#fff] flex justify-center items-center rounded-3xl">
                    <FaPhoneVolume className="text-[30px]  text-[#0D4C93] hover:text-white " />
                  </div>
                  <p className="  text-[#5A5A5A] text-base font-normal leading-normal">
                    +998 71 276-62-53 <br /> +998 71 276-62-54
                  </p>
                </div>
                <Create />
              </div>
            </div>
            <div className=" font-sans max-md:hidden">
              <h2 className="text-[#595959] text-[26px] font-medium leading-7">
                О компании
              </h2>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                История
              </p>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                Партнеры
              </p>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                Вакансии
              </p>
            </div>
            <div className=" max-md:hidden">
              <h2 className="text-[#595959] text-[26px] font-medium leading-7">
                Продукция
              </h2>
              <div className="text-[#595959] text-[16px] font-light leading-7">
                <p>Эндоваскулярная хирургия</p>
                <p> Аритмология</p>
                <a
                  className="text-[#00C9C9] text-[16px] font-light leading-7"
                  href="#"
                >
                  Кардиохирургия
                </a>
                <p> Лабораторная диагностика</p>
                <p>Хирургия</p>
                <p>Эндоурология</p>
                <p> Нейрохирургия </p>
                <p>Анестезиология и реанимация </p>
                <p>Диабет</p>
              </div>
            </div>
            <div className=" max-md:hidden">
              <h2 className=" text-[#595959] text-[26px] font-medium leading-7">
                Услуги
              </h2>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                Сервис
              </p>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                Регистрации
              </p>
              <p className="text-[#595959] text-[16px] font-light leading-7">
                Услуги логистики
              </p>
            </div>
          </div>
          <div className="  flex gap-5">
            <img className="max-sm:hidden" src={Logo} alt="" />
            <div className="w-[442px] h-[115px]">
              <p className="text-[#585858] text-lg font-normal leading-7">
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить
                огромную пользу населению, путем решения глобальных вопросов.
                Внедряя инновационные технологии <br /> на рынок Узбекистана.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-16 mt-10">
            <p className="text-[#353535] text-lg font-normal leading-7 ">
              © 2021 ООО «Medical Online Services»
            </p>
            <p className="text-[#353535] text-lg max-md:hidden font-normal leading-7">
              Сайт разработан компанией
              <span className="text-[#00C9C9] cursor-pointer">www.uz</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
