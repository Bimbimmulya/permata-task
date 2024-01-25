import React from "react";
import { values } from "../data/dummy";
const OurValue = () => {
  return (
    <div id="Values" className="wrap-values">
      <h1 className="heading-values">
        Mengapa Kamu Harus Memiliki Website Sendiri? 🤷‍♀️
      </h1>
      <span className="wrap-desc-values">
      Di era digital yang terus berkembang, memiliki kehadiran online adalah suatu keharusan. Dalam dunia yang semakin terhubung ini, website adalah kunci untuk memanfaatkan peluang, menciptakan identitas online, dan menghubungkan diri dengan khalayak yang lebih luas. Mari kita bahas mengapa memiliki website adalah langkah yang penting untuk kesuksesan bisnis kamu.
      </span>
      <div className="card-values">
        {values.map((item, i) => {
          return (
            <div
              className="wrap-content-values"
              key={i}
            >
              <div className="wrap-image-valeus">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-values"
                />
              </div>
                <h1 className="title-values">
                  {item.title}
                </h1>
                <p className="desc-values">
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