import React, { useState } from "react";
import location from "../assets/Location.svg";
import Phone from "../assets/Phone.svg";
import magnifier from "../assets/magnifier.svg";
import logo from "../assets/logo.svg";
import Russia from "../assets/Russia.svg";
import facebook from "../assets/facebook.svg";
import Align from "../assets/align.svg";
import { FaPhoneVolume } from "react-icons/fa";
import { ImLocation } from "react-icons/Im";
import { BiSearchAlt, BiLogoFacebook } from "react-icons/Bi";
import icon from "../assets/arroww.png";
import Logo from "../assets/logoo.svg";

function Navbar({ active, setActive }) {
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setModal(!modal);
  };
  return (
    <div className="Head  flex   py-10 px-10 justify-between items-center">
      <div className="flex ">
        <div className=" flex max-md:hidden">
          <div className="flex gap-3">
            <div className="flex justify-center icon hover:text-white items-center hover:bg-[#0D4C93] bg-white    flex-shrink-0 cursor-pointer  text-[#0D4C93] rounded-3xl w-12 h-12">
              <ImLocation className="text-[30px]  hover:text-white " />
            </div>
            <p className=" text  text-#5A5A5A  text-lg  max-md:hidden leading-normal tracking-normal">
              г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
            </p>
          </div>

          <div className="flex gap-4 ">
            <div className="icon hover:bg-[#0D4C93]  flex hover:text-white cursor-pointer justify-center items-center ml-4 text-[#0D4C93]  bg-white  flex-shrink-0  rounded-3xl w-12 h-12">
              <FaPhoneVolume className="text-[30px] text-[#0D4C93] hover:text-white" />
            </div>
            <p className=" text max-md:hidden">
              +998 71 276-62-53 <br /> +998 71 276-62-54
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[200px] h-[58px]  max-md:block   max-[450px]:hidden">
        <img className="gap-10" src={logo} alt="" />
      </div>
      <div className=" w-[134px] h-[38px] max-2xl:hidden max-[450px]:block">
        <img src={Logo} alt="" />
      </div>
      <div className="flex   gap-9 max-2xl:hidden ">
        <div className="flex justify-center icon hover:text-white items-center hover:bg-[#0D4C93] bg-white    flex-shrink-0 cursor-pointer  text-[#0D4C93] rounded-3xl w-12 h-12">
          <ImLocation className="text-[30px]  hover:text-white " />
        </div>
        <div className="icon hover:bg-[#0D4C93]  flex hover:text-white cursor-pointer justify-center items-center ml-4 text-[#0D4C93]  bg-white  flex-shrink-0  rounded-3xl w-12 h-12">
          <FaPhoneVolume className="text-[30px] text-[#0D4C93] hover:text-white" />
        </div>
      </div>
      <div className="icon max-sm:hidden hover:bg-[#0D4C93] hover:text-white  cursor-pointer text-[#0D4C93] flex justify-center items-center  bg-white  flex-shrink-0  rounded-3xl w-12 h-12">
        <BiSearchAlt className="text-[30px] hover:text-white" />
      </div>
      <form className="inp">
        <input className="inp" name="search" placeholder="Search.." type="text" />
      </form>

      <div className="flex ">
        <div className="flex icon  hover:bg-[#0D4C93] hover:text-white text-[#0D4C93] cursor-pointer justify-center gap-4 items-center max-md:hidden  bg-white  flex-shrink-0  rounded-3xl w-40 h-12">
          <div className="flex hover:text-white">
            <BiLogoFacebook className="text-[30px] hover:text-white" />
            <p className="font-sans text-sm leading-normal font-semibold items-center">
              Мы на Facebook
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className="flex icon hover:bg-[#0D4C93]  text-[#0D4C93] hover:text-white cursor-pointer p-3 gap-3 items-center max-md:w-[85px] h-[50px] 
          bg-white  flex-shrink-0  rounded-3xl w-40 h-12"
        >
          <div className=" hover:text-white flex justify-center items-center gap-3 ">
            <img
              className="  rounded-[50%] max-md:rounded-[50%] mx-[-4]"
              src={Russia}
              alt=""
            />
            <p className=" max-md:hidden  font-sans text-sm leading-normal font-semibold items-center">
              Русский
            </p>
            <img className="ml-3  " src={icon} alt="" />
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-[25px] hidden w-[50px] h-[61px] max-md:block">
        <img
          className="leftMenu flex justify-center items-center  mt-5 ml-3 cursor-pointer "
          src={Align}
          alt=""
          onClick={toggleMenu}
        />
        {modal && (
          <nav className="menu_left">
            <ul className="menuItem ">
              <li>
                <a href="#МАГАЗИН">МАГАЗИН</a>
              </li>
              <li>
                <a href="#О КОМПАНИИ">О КОМПАНИИ</a>
              </li>
              <li>
                <a href="#ПРОДУКЦИЯ"> ПРОДУКЦИЯ</a>
              </li>
              <li>
                <a href="#УСЛУГИ">УСЛУГИ</a>
              </li>
              <li>
                <a href="#АКЦИИ И НОВОСТИ">АКЦИИ И НОВОСТИ</a>
              </li>
              <li>
                <a href="#ОБРАТНАЯ СВЯЗЬ"> ОБРАТНАЯ СВЯЗЬ</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
