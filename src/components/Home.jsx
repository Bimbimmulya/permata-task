import React from "react";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen home bg-no-repeat bg-cover bg-left md:bg-center flex  items-center px-5 lg:px-[72px] ">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
          DIGITAL AGENCY
        </h1>
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">
        Jasa Pembuatan Website Murah dan Terpercaya
        </h1>
        <p className="text-[14px] lg:text-[18px]">
        Realisasikan impian bisnismu dengan desain website profesional dengan harga murah! Temukan paket pembuatan website yang sesuai dengan kebutuhan bisnismu.
        </p>
        <div>
          <button className="py-2 px-8 bg-blue text-white rounded-full">
          Konsultasi Sekararang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;