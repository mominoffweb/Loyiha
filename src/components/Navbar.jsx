import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Rus from "../assets/Russia.svg";
import Align from "../assets/align.svg";
import { FaPhoneVolume } from "react-icons/fa";
import { ImLocation } from "react-icons/Im";
import { BiSearchAlt, BiLogoFacebook } from "react-icons/Bi";
import icon from "../assets/arroww.png";
import Logo from "../assets/logoo.svg";
import Uzb from "../assets/Uzbek.png";
import Eng from "../assets/English.png";

function Navbar({ active, setActive }) {
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setModal(!modal);
  };
  return (
    <div className="Head  flex  gap-[10px]  py-10 px-5 justify-center items-center">
      <div className="flex ">
        <div className=" flex ">
          <div className="flex gap-3">
            <div className="flex justify-center icon hover:text-white items-center hover:bg-[#0D4C93] bg-white  max-md:hidden   flex-shrink-0 cursor-pointer  text-[#0D4C93] rounded-3xl w-12 h-12">
              <ImLocation className="text-[30px]   hover:text-white " />
            </div>
            <p className=" text max-[1115px]:hidden  text-#5A5A5A  text-lg  max-md:hidden leading-normal tracking-normal">
              г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
            </p>
          </div>

          <div className="flex gap-4 ">
            <div className="icon hover:bg-[#0D4C93]  flex hover:text-white cursor-pointer justify-center items-center ml-4 text-[#0D4C93] max-md:hidden  bg-white  flex-shrink-0  rounded-3xl w-12 h-12">
              <FaPhoneVolume className="text-[30px] text-[#0D4C93] hover:text-white" />
            </div>
            <p className="max-[1115px]:hidden text max-md:hidden">
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
      <div className="icon hover:bg-[#0D4C93]  flex hover:text-white cursor-pointer justify-center items-center ml-4 text-[#0D4C93]   bg-white  flex-shrink-0  rounded-3xl w-12 h-12">
        <FaPhoneVolume className="text-[30px] text-[#0D4C93] hover:text-white" />
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
      <form className="inp  max-[375px]:hidden ">
        <input
          className="inp"
          name="search"
          placeholder="Search.."
          type="text"
        />
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
        <button
          id="dropdownUsersButton"
          data-dropdown-toggle="dropdownUsers"
          data-dropdown-placement="bottom"
          class=" bg-white max-[375px]:hidden   focus:ring-4 focus:outline-none  font-medium rounded-3xl w-40 h-10 text-sm px-5 py-2.5 text-center hover:bg-[#0D4C93] hover:text-white inline-flex items-center text-[#0D4C93] "
          type="button"
        >
          <a href="#" class="flex  items-center px-4 py-2">
            <img
              class="w-6 h-6  me-2 rounded-full"
              src={Rus}
              alt="Jese image"
            />
            Русский
          </a>
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownUsers"
          class="z-10 hidden bg-white rounded-lg  shadow w-40  text-white "
        >
          <ul
            class="h-28  overflow-y-auto text-white dark:text-gray-200"
            aria-labelledby="dropdownUsersButton"
          >
            <li className="text-xl">
              <a
                href="#"
                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#0D4C93] dark:hover:text-white"
              >
                <img
                  class="w-6 h-6 me-2 rounded-full"
                  src={Eng}
                  alt="Jese image"
                />
                English
              </a>
            </li>

            <li className="text-xl">
              <a
                href="#"
                class="flex items-center px-4 py-2  hover:bg-gray-100  dark:hover:bg-[#0D4C93] dark:hover:text-white"
              >
                <img
                  class="w-6 h-6 me-2 rounded-full"
                  src={Uzb}
                  alt="Jese image"
                />
                O’zbekcha
              </a>
            </li>
          </ul>
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
