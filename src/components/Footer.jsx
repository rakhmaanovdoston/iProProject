import React from "react";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import telegram from "../assets/telegram.svg";
import tikTok from "../assets/TikTok.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#6e7eff] to-[#f77c7c] mt-5 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        <div className="flex flex-wrap justify-between md:justify-start gap-10">
          <ul className="space-y-2">
            <li><a href="#">Hujjatlar</a></li>
            <li><a href="#">Umumiy shartlar</a></li>
            <li><a href="#">Nizom</a></li>
            <li><a href="#">Guvohnoma</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#">Servis</a></li>
            <li><a href="#">Do’konlar</a></li>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Hamkorlik uchun</a></li>
            <li><a href="#">Qaytarish</a></li>
            <li><a href="#">Promokodlar</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Axborot xizmati</p>
          <a href="mailto:contact.@nextstore.uz">contact.@nextstore.uz</a>
          <p className="font-semibold">Telefon raqami:</p>
          <p>+998 97 712 96 96</p>
          <p>+998 95 503 09 09</p>
          <p className="font-semibold">Manzil:</p>
          <p>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</p>
        </div>

        <div className="flex items-center space-x-5">
          <a href="#"><img src={facebook} alt="Facebook" className="w-6 h-6" /></a>
          <a href="#"><img src={insta} alt="Instagram" className="w-6 h-6" /></a>
          <a href="#"><img src={telegram} alt="Telegram" className="w-6 h-6" /></a>
          <a href="#"><img src={tikTok} alt="TikTok" className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
