import React from "react";
import Frame from "../assets/Frame.png";

function Modal() {
  return (
    <div className="gap-10">
      <div className=" flex  justify-center items-center gap-14 py-40 relative">
        <div className="flex ml-[4rem] gap-14  max-md:w-[320px] max-md:ml-[-20rem] ">
          <div className="max-sm:ml-[12rem] ">
            <div className="">
              <img
                className="  max-md:w-[270px] top-[30px]  absolute z-10"
                src={Frame}
                alt=""
              />
            </div>
            <div className="py-24 btn1 bock w-[382px] h-[470px] rounded-[35px] max-md:w-[320px] ml-[-2rem] opacity-90 bro">
              <a
                href="#"
                className="w-[312px] text-center flex items-center justify-center ml-10  max-md:ml-[10px] texts text-[#0D4C93] text-xl font-normal leading-normal"
              >
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </a>
              <p className="text-[#0D4C93] text-center py-5 text-lg font-medium  leading-6">
                26.07.2021
              </p>
              <p className="w-[327px] h-[171px] text-[#363535] max-md:ml-[-13px] text-center ml-10  text-sm font-normal leading-6">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный <br />
                Научно-Практический Медицинский Центр Урологии) при поддержке
                компаний <br /> Ethicon Endo Surgery (Johnson&Johnson) и <br />{" "}
                ИП ООО «Medical Online Services» был <br /> проведен
                мастер-класс в исполнении...
              </p>
              <div className="btn but w-[270px] h-[50px] flex justify-center items-center  mt-5 ml-10 rounded-[35px]">
                <button className="text-[#fff] text-center text-xl font-normal leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
          </div>

          <div className="max-sm:hidden">
            <div className="ml-5  ">
              <img
                className=" max-md:w-[270px] ml-5 top-[30px] absolute z-10"
                src={Frame}
                alt=""
              />
            </div>
            <div className=" py-24 btn1 bock w-[382px] h-[470px] rounded-[35px]  opacity-90 bro">
              <a
                href="#"
                className="w-[312px] texts text-center flex items-center justify-center ml-10  text-[#0D4C93] text-xl font-normal leading-normal"
              >
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </a>
              <p className="text-[#0D4C93] text-center py-5 text-lg font-medium  leading-6">
                26.07.2021
              </p>
              <p className="w-[327px] h-[171px] text-[#363535] text-center ml-10  text-sm font-normal leading-6">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный <br />
                Научно-Практический Медицинский Центр Урологии) при поддержке
                компаний <br /> Ethicon Endo Surgery (Johnson&Johnson) и <br />{" "}
                ИП ООО «Medical Online Services» был <br /> проведен
                мастер-класс в исполнении...
              </p>
              <div className="btn but w-[270px] h-[50px] flex justify-center items-center  mt-5 ml-10 rounded-[35px]">
                <button className="text-[#fff] text-center text-xl font-normal leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
          </div>

          <div className="max-sm:hidden">
            <div className="ml-5  ">
              <img
                className="ml-5 top-[30px] absolute z-10"
                src={Frame}
                alt=""
              />
            </div>
            <div className="py-24 btn1 bock w-[382px] h-[470px] rounded-[35px]  opacity-90 bro">
              <a
                href="#"
                className="w-[312px] texts flex items-center justify-center text-center ml-10  text-[#0D4C93] text-xl font-normal leading-normal"
              >
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </a>
              <p className="text-[#0D4C93] text-center py-5 text-lg font-medium  leading-6">
                26.07.2021
              </p>
              <p className="w-[327px] h-[171px] text-[#363535] text-center ml-10  text-sm font-normal leading-6">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный <br />
                Научно-Практический Медицинский Центр Урологии) при поддержке
                компаний <br /> Ethicon Endo Surgery (Johnson&Johnson) и <br />{" "}
                ИП ООО «Medical Online Services» был <br /> проведен
                мастер-класс в исполнении...
              </p>
              <div className="btn w-[270px] but h-[50px] flex justify-center items-center  mt-5 ml-10 rounded-[35px]">
                <button className="text-[#fff] text-center text-xl font-normal leading-normal">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
