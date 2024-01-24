import React from "react";
import { values } from "../data/dummy";
const OurValue = () => {
  return (
    <div id="Values" className="w-full h-auto px-5 lg:px-[72px] flex flex-col gap-5 mt-4">
      <h1 className="font-bold text-[24px] lg:text-[30px] text-text">
        Mengapa Kamu Harus Memiliki Website Sendiri? 🤷‍♀️
      </h1>
      <h1 className="text-2xl lg:text-[16px] text-gray-400">
      Di era digital yang terus berkembang, memiliki kehadiran online adalah suatu keharusan. Dalam dunia yang semakin terhubung ini, website adalah kunci untuk memanfaatkan peluang, menciptakan identitas online, dan menghubungkan diri dengan khalayak yang lebih luas. Mari kita bahas mengapa memiliki website adalah langkah yang penting untuk kesuksesan bisnis kamu.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {values.map((item, i) => {
          return (
            <div
              className="flex flex-col gap-3 justify-center items-center col-span-1 "
              key={i}
            >
              <div className="w-[300px] h-[300px] flex flex-col h-full">
                <img
                  src={item.image}
                  alt=""
                  className="p8-8 rounded py-2 items-center m-auto h-60 w-full object-cover"
                />
              </div>
              <h1 className="text-[16px] lg:text-[20px] font-bold text-text">
                {item.title}
              </h1>
              <p className="text-center text-[16px] lg:text-[20px] max-w-[400px] text-gray-400">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValue;