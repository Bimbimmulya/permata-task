import React, { useEffect, useState } from 'react'
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className={`${
        scroll ? "bg-[#FFE8E5] lg:-top-20 h-[60px] " : "top-0"
      } flex justify-between items-center px-5 lg:px px-[72] h-[80px] w-full fixed`}>
        <div className="w-[103px] h-[25px]">
            <img className="w-full h-fulll object-contain" src={logo} alt="Ruang Engineer" />
        </div>
        <ul className="hidden md:block">
            <li className="flex gap-x-4">
                {navLink.map((item) => {
                    return (
                    <Link className="hover:text-orange text-sm md:text-md cursor-pointer" 
                    to={item.id} key={item.id}>{item.id}</Link>
                    )
                })}
            </li>
        </ul>

        <div>
            <button className="px-6 lg:px-8 py-2 bg-white text-sm 
            outline-none hover:bg-orange hover:text-white rounded-full">
              Sign In
            </button>
        </div>
        <AiOutlineMenu className="text-2xl block md:hidden" 
        onClick={() => setNav((prev) => !prev)}/>
        <div className={`${ nav ? "right-0" : "-right-[100%]"
        } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}>
          <AiOutlineClose className="cursor-pointer text-2xl" 
        onClick={() => setNav((prev) => !prev)}/>
          <ul className="">
              <li className="flex gap-y-4 flex-col">
                  {navLink.map((item) => {
                      return (
                      <Link className="hover:text-orange text-sm md:text-md border-bottom cursos-pointer" 
                      to={item.id} key={item.id}>{item.id}</Link>
                      )
                  })}
              </li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar
