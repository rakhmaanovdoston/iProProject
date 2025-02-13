import React from "react";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import telegram from "../assets/telegram.svg";
import tikTok from "../assets/TikTok.svg";

const Footer = () => {
  return (
    <footer className="min-w-full h-[450px] bg-gradient-to-r from-[#6e7eff] to-[#f77c7c] mt-[20px]">
      <div className="w-[900px] h-[300px] flex justify-center items-center m-auto gap-[100px] text-white">
        <div className="w-[400px] flex justify-center gap-10 items-start">
          <ul className="list">
            <a href="#">
                <li>Hujjatlar</li>
            </a>
            <a href="#">
                <li>Umumiy shartlar</li>
            </a>
            <a href="#">
                <li>Nizom</li>
            </a>
            <a href="#">
                <li>Guvohnoma</li>
            </a>
          </ul>
          <ul className="list list2">
            <a href="#">
                <li>Servis</li>
            </a>
            <a href="#">
                <li>Do’konlar</li>
            </a>
            <a href="#">
                <li>Biz haqimizda</li>
            </a>
            <a href="#">
                <li>Hamkorlik uchun</li>
            </a>
            <a href="#">
                <li>Qaytarish</li>
            </a>
            <a href="#">
                <li>Promokodlar</li>
            </a>
          </ul>
        </div>
        <ul className="list ">
          <a href="#">
            <li>Axbarot xizmati</li>
          </a>
          <a href="#">
            <li>contact.@nextstore.uz</li>
          </a>
          <li className="onlyList">
            +998 97 712 96 96
            <span>+998 95 503 09 09</span>
          </li>
          <li>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</li>
          <li className="flex items-center gap-[20px]">
            <a href="#">
                <img src={facebook} alt="" />
            </a>
            <a href="#">
                <img src={insta} alt="" />
            </a>
            <a href="#">
                <img src={telegram} alt="" />
            </a>
            <a href="#">
                <img src={tikTok} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
