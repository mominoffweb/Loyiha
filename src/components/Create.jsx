import React, { useState } from "react";
import Icon from "../assets/icon-x.svg"




function Create({ active, setActive }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="btn but  max-md:ml-[-14rem] rounded-[35px] text-white font-normal text-xl ">
        <button
          onClick={toggleModal}
          className="btn-modal   w-[270px] h-[50px] flex justify-center items-center text-#fff text-xl font-normal "
        >
          Оставьте заявку
        </button>
      </div>

      {modal && (
        <div className="modal ">
          <div className="ovelay"></div>
          <div className="modal-container ">
            <button className="close-modal" onClick={toggleModal}>
              <img src={Icon} alt="" />
            </button>
            <h2 className="text-center text-[#5A5A5A] text-[35px] font-semibold">
              Оставьте заявку
            </h2>
            <div className="flex-col flex gap-4 justify-center items-center">
              <label htmlFor="">
                <input
                  className="w-[350px] p-3 h-[56px] rounded-[20px] bg-[#F6F6F6]"
                  type="text"
                  placeholder="ФИО"
                />
              </label>
              <label htmlFor="number">
                <input
                  className="w-[350px] p-3 h-[56px] rounded-[20px] bg-[#F6F6F6]"
                  type="number"
                  placeholder="Номер телефона*"
                />
              </label>
              <input
                className="w-[350px] p-3 h-[56px] rounded-[20px] bg-[#F6F6F6]"
                type="text"
                placeholder="Тема обращения*"
              />
              <input
                className="w-[350px] p-3  rounded-[20px] bg-[#F6F6F6]"
                type="text"
                placeholder="Сообщение*"
              />
            </div>

            <div className="flex gap-3">
              <input
                className="bg-[#F6F6F6]]"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              ></input>
              <p className="text-[#333]  text-sm leading-normal ">
                Отправляя заявку Вы соглашаетесь с политикой <br />{" "}
                конфиденциальности
              </p>
            </div>
            <div className="btn-modal btn rounded-[35px] text-center w-[270px] h-[50px] flex justify-center items-center text-white text-xl font-normal">
              <button className="text-#fff text-xl font-medium leading-normal">
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;
