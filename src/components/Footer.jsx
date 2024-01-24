import React from "react";
import { apps, googlePlay,mainImg } from "../asset";
const Footer = () => {
  return (
    <div className="flex flex-col h-auto my-8 lg:my-0 md:flex-row justify-center gap-3  items-center px-5 lg:px-[72px]">
      <div className="h-[400px] w-full md:flex-1">
        <img src={mainImg} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-3 md:flex-1">
        <h1 className="text-[16px] font-bold text-orange">
        Dapatkan Konsultasi Gratis
        </h1>
        <h1 className="text-2xl font-bold">Dwonload App</h1>
        <p className="text-text text-[14px]">
            Kami siap siaga menjadi solusi Bisnis Anda.
        </p>
        <div className="w-full h-[50px] lg:h-[70px] flex ">
          <img src={apps} alt="" className="w-[300px] h-full " />
          <img src={googlePlay} alt="" className="w-[300px] h-full " />
        </div>
      </div>
    </div>
  );
};

export default Footer;