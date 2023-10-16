import React from "react";
import Image1 from "../assets/image_1.svg";
import Image2 from "../assets/img2.svg";
import Image3 from "../assets/image_3.svg";
import Image4 from "../assets/image-4.svg";
import Image5 from "../assets/img5.svg";
import Image6 from "../assets/image_6.svg";
import Servic1 from "../assets/servic1.png";
import Servic2 from "../assets/service_2.png";
import Servic3 from "../assets/service-3.png";
import Ellips1 from "../assets/Ellipse1_1.png";
import Ellips2 from "../assets/Ellipse2_2.png";
import Ellips3 from "../assets/Ellipse3_3.png";
import logo from "../assets/logo.svg";
import Frame from "../assets/Frame.png";
import Image from "../assets/Ekran.png";
import Arraw1 from "../assets/arrow1.svg";
import Arraw2 from "../assets/arrow2.svg";
import Modal from "../components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  return (
    <div className=" bg-white w-full      py-[65px]">
      <div id="ПРОДУКЦИЯ" className="flex justify-center items-center">
        <a
          className="text-[#0D4C93] text-[40px] font-medium leading-normal"
          href="#ПРОДУКЦИЯ"
        >
          ПРОДУКЦИЯ
        </a>
      </div>
      <div className="flex justify-center ml-[-1rem] ">
        <div className="   px-10 py-16 grid grid-cols-3 gap-16  max-md:grid-cols-2  ">
          <div className=" max-sm:w[335px]   w-[413px] h-[439px] box text-center  max-md:w-[334px] flex justify-center items-center max-md:ml-[-1rem]   rounded-[35px] opacity-90 bg-gray-100">
            <div>
              <img className="mx-24 " src={Image1} alt="" />
              <p className="text-[#363535] text-2xl font-normal leading-normal ">
                Эндоваскулярная <br /> хирургия
              </p>
              <div className="rounded-[35px]  but flex justify-center items-center flex-shrink-0 my-7 mx-16 w-[270px] h-[70px]  opacity-90 btn ">
                <button className="text-[#FFF] bat text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden  w-[413px] h-[439px]   max-md:flex  justify-center items-center text-center max-md:w-[334px] box  rounded-[35px] opacity-90 bg-gray-100">
            <div className="py-10 ">
              <img className="mx-24  " src={Image2} alt="" />
              <p className="text-[#363535] text-2xl py-4 font-normal leading-normal ">
                Лабораторная <br /> диагностика
              </p>
              <div className="rounded-[35px]  but flex  justify-center mt-8 items-center flex-shrink-0  my-4 mx-16 w-[270px] h-[70px] max-md:mt-10  opacity-90 btn ">
                <button className="text-[#FFF]  text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>
          <div className=" max-sm:hidden w-[413px] h-[439px] box text-center rounded-[35px] max-md:hidden opacity-90 bg-gray-100">
            <div className="py-4">
              <img className="mx-24 " src={Image3} alt="" />
              <p className="text-[#363535] text-2xl font-normal leading-normal ">
                Кардиохирургия
              </p>
              <div className="rounded-[35px] flex but justify-center items-center flex-shrink-0 my-8 mx-16 w-[270px] h-[70px]  opacity-90 btn ">
                <button className="text-[#FFF] text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>

          <div className="w-[413px] h-[439px] box text-center max-md:hidden rounded-[35px] opacity-90 bg-gray-100">
            <div className="py-10 ">
              <img className="mx-8 " src={Image4} alt="" />
              <p className="text-[#363535] text-2xl py-2  font-normal leading-normal ">
                ДИАБЕТ
              </p>
              <div className="rounded-[35px] flex but justify-center items-center flex-shrink-0 my-10  mx-16 w-[270px] h-[70px]  opacity-90 btn ">
                <button className="text-[#FFF] text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>
          <div className="w-[413px] h-[439px] box text-center max-md:hidden rounded-[35px] opacity-90 bg-gray-100">
            <div className="py-20">
              <img className="mx-24 " src={Image5} alt="" />
              <p className="text-[#363535] text-2xl py-12 font-normal leading-normal ">
                ЭНДОУРОЛОГИЯ
              </p>
              <div className="rounded-[35px] but flex justify-center items-center flex-shrink-0 my-[-7] mx-16 w-[270px] h-[70px]  opacity-90 btn ">
                <button className="text-[#FFF] text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>

          <div className="w-[413px] h-[439px]  box text-center max-md:hidden rounded-[35px] opacity-90 bg-gray-100">
            <div className="py-16">
              <img className="mx-28 " src={Image6} alt="" />
              <p className="text-[#363535] text-2xl py-4 font-normal leading-normal ">
                АРИТМОЛОГИЯ
              </p>
              <div className="rounded-[35px] but flex justify-center items-center flex-shrink-0 my-7 mx-16 w-[270px] h-[70px]  opacity-90 btn">
                <button className="text-[#FFF] text-center text-xl font-medium   leading-normal ">
                  Посмотреть все
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="УСЛУГИ" className="flex justify-center  my-20 items-center">
        <a
          href="#УСЛУГИ"
          className="text-[#0D4C93]  text-[40px]  font-medium leading-normal"
        >
          УСЛУГИ
        </a>
      </div>

      <div className="Main px-10  gap-12 flex justify-center items-center   py-20 ">
        <div className="max-md:w-[314px] flex  ml-[-10rem] max-md:ml-[-22rem] gap-12">
          {" "}
          <div className="max-sm:w-[335px] ml-[10rem] max-md:ml-[-10px] bg-white bock w-[388px] h-[491px]   rounded-[50px]">
            <img className="rounded-t-[50px]" src={Servic1} alt="" />
            <p className="text-[#0D4C93] text-xl py-5 ml-16 max-md:ml-[30px]  font-medium leading-normal">
              СЕРВИС ОБОРУДОВАНИЯ
            </p>
            <p className="text-center flex ml-10 text-base max-md:ml-[-5px] font-light w-[305px] h-[110px]  leading-6 text-black ">
              Компания предоставляет сервисное обслуживание по всем <br />
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <div className="w-[270px] but h-[50px] max-md:ml-[10px] flex justify-center items-center  mt-12 ml-10 rounded-[35px] btn opacity-90">
              <button className="text-[#fff] text-center  text-xl font-normal leading-normal">
                Подробнее
              </button>
            </div>
          </div>
          <div className="max-sm:hidden  bg-white bock w-[388px] h-[491px] max-md:w-[314px]   rounded-[50px]">
            <img className="rounded-t-[50px]" src={Servic2} alt="" />
            <p className="text-[#0D4C93] text-xl py-5 flex justify-center items-center   font-medium leading-normal">
              РЕГИСТРАЦИИ
            </p>
            <p className="text-center max-md:ml-[10px] flex ml-10 text-base font-light w-[305px] h-[110px]  leading-6 text-black ">
              Обеспечение получения <br /> разрешительных документов,
              регистрационного удостоверения на изделия медицинского назначения
              Подготовка объектов к проведению ....
            </p>
            <div className="w-[270px] but h-[50px]  max-md:ml-[20px] flex justify-center items-center  mt-12 ml-10 rounded-[35px] btn  opacity-90">
              <button className="text-[#fff] text-center text-xl font-normal leading-normal">
                Подробнее
              </button>
            </div>
          </div>
          <div className="max-sm:hidden max-md:hidden  bg-white bock w-[388px] h-[491px]   rounded-[50px]">
            <img className="rounded-t-[50px]" src={Servic3} alt="" />
            <p className="text-[#0D4C93] text-xl py-5 ml-16   font-medium leading-normal">
              УСЛУГИ ЛОГИСТИКИ
            </p>
            <p className="text-center flex ml-10 text-base font-light w-[305px] h-[110px]  leading-6 text-black ">
              Компания предоставляет сервисное обслуживание по всем <br />
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей.....
            </p>
            <div className="w-[270px] but h-[50px] flex justify-center items-center  mt-12 ml-10 rounded-[35px] btn opacity-90">
              <button className="text-[#fff] text-center text-xl font-normal leading-normal">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  justify-center items-center px-10">
        <div id="OКОМПАНИИ" className="flex justify-center items-center  py-12">
          <a
            href="#OКОМПАНИИ"
            className="text-[#0D4C93] text-[40px] font-medium  leading-normal"
          >
            O КОМПАНИИ
          </a>
        </div>
        <div className=" flex bg  max-md:rounded-[50px] max-sm:w-[395px] max-sm:mt-[-3rem]   max-md:w-[598px] max-md:ml-[3rem]">
          <div className=" absolute max-md:hidden">
            <div className="flex ml-[-20rem] mt-[-3rem] ">
              <img
                className="w-[574px] h-[574px] ml-[12rem] "
                src={Ellips1}
                alt=""
              />
              <img
                className=" ml-[-32rem] w-[458px] h-[458px]  mt-[4rem] "
                src={Ellips2}
                alt=""
              />
              <img
                className="w-[352px] h-[352px] ml-[-405px] mt-[115px]"
                src={Ellips3}
                alt=""
              />
              <img
                className="w-[200px] h-[58px] ml-[-18rem] mt-[16rem]"
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div className="max-2xl:ml-[30rem] max-md:rounded-[50px]  ">
            <div className="  max-md:w-[650px] h-[450px]  max-md:py-10  ">
              <h1 className="text-[#363535]  max-sm:w-[400px] max-sm:mt-[-2rem]   max-md:ml-[-30rem] max-md:w-[600px]    mt-[3rem] text-xl  font-light leading-9">
                Группа компаний MEDOL создавалась высококвалифицированными
                специалистами в сфере медицины, инженерии и экономики, за
                плечами которых значительный опыт на рынке высоких медицинских
                технологий, которая имеет свои представительства в разных
                уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане
                ИП ООО “Medical Online Services". Цель компании построить
                прозрачный долгосрочный бизнес, принести пользу обществу путем
                развития и внедрения передовых технологий в систему
                здравоохранения Республики Узбекистан.
              </h1>
              <div className=" but max-sm:ml-[-27rem] max-sm:mt-[-1rem] flex justify-center  max-md:ml-[-20rem] items-center mt-10 btn w-[270px] h-[50px] rounded-[35px] ">
                <button className="text-white items-center text-xl font-normal  leading-normal -tracking-tighter">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div id=" НОВОСТИ" className="flex justify-center  items-center ">
          <a
            href="#НОВОСТИ"
            className="text-[#0D4C93] text-[40px]  font-medium lein  "
          >
            НОВОСТИ
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
            <Modal />
          </SwiperSlide>
          <SwiperSlide>
            <Modal />
          </SwiperSlide>
          <SwiperSlide>
            <Modal />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center max-md:hidden  gap-72 items-center">
          <div className="flex gap-4 cursor-pointer ">
            <p className="w-[293px] h-[28px]  text-[#00C9C9] text-2xl font-normal  leading-normal">
              Посмотреть все новости
            </p>
            <img src={Arraw1} alt="" />
          </div>
          <div className=" cursor-pointer  flex gap-4">
            <p className="w-[280px] h-[28px]  text-[#0D4C93] text-2xl font-normal  leading-normal">
              Подписаться на новости
            </p>
            <img src={Arraw2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
