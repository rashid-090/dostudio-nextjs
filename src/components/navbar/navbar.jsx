"use client";
import React, { useEffect, useState } from "react";
import { Logoblack, Logowhite } from "../../../public/images";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {banners} from '../../components/constant/data'
import { CgArrowLongLeft } from "react-icons/cg";

const items = [
  {
    title: `home`,
    url: `/`,
    delay: 0.1,
  },
  {
    title: `services`,
    url: `/services`,
    delay: 0.2,
  },
  {
    title: `our works`,
    url: ``,
    delay: 0.3,
    ismenu: true,
  },
  {
    title: `blogs`,
    url: `/blog`,
    delay: 0.4,
  },
  {
    title: `contact`,
    url: `/contact`,
    delay: 0.5,
  },
];

const submenu = [
  {
    title: `BRANDING`,
    url: `/service1`,
    delay: 0.2,
  },
  {
    title: `WEB DESIGN`,
    url: `/service2`,
    delay: 0.2,
  },
  {
    title: `DIGITAL MARKETING`,
    url: `/service3`,
    delay: 0.2,
  },
  {
    title: `PACKAGE DESIGN`,
    url: `/service3`,
    delay: 0.2,
  },
  {
    title: `PRINT DESIGN`,
    url: `/service3`,
    delay: 0.2,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [issubMenuOpen, setSubMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handlesubMenuToggle = () => {
    setSubMenuOpen(!issubMenuOpen);
  };

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight;
    if (window.scrollY >= scrollThreshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, banners[index].duration);
    return () => clearInterval(intervalId);
  }, [index]);

  let humbclr = banners[index].humberclr

  return (
    <>
      {/* ===========================================NAVBAR START=========================================== */}
      <nav
        className={`px-5 fixed top-0 left-0 right-0 flex justify-between items-center w-full h-[4.5rem] transition duration-300 ease-in-out ${
          isScrolled ? "navbar" : "bg-transparent"
        }`}
      >
        {/* scroll active header */}
        <div className={`${!isScrolled ? 'hidden':'block'}`}>
          {isScrolled ? (
            <Image priority className="h-20 w-44" src={Logoblack} alt="Do studio" />
          ) : (
            <Image priority className="h-20 w-44" src={Logowhite} alt="Do studio" />
          )}

        </div>
        {/* changing logo header */}
        <div className={`${isScrolled ? 'hidden':'block'}`}>
          <Image priority className="h-20 w-44" src={banners[index].logo} alt="Do studio" />
        </div>

        {/* scroll active humberger */}
        <div
          onClick={handleMenuToggle}
          className={`${!isScrolled ? 'hidden':'block'} flex flex-col h-8 p-1 justify-center  items-end space-y-1.5 cursor-pointer w-fit`}
        >
          <div className={`h-[2.5px] w-8  ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`h-[2.5px] w-5  ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
        </div>
        {/* change color humberger */}
        <div
          onClick={handleMenuToggle}
          className={`${isScrolled ? 'hidden':'block'} flex flex-col h-8 p-1 justify-center  items-end space-y-1.5 cursor-pointer w-fit`}
        >
          <div className={`h-[2.5px] w-8`} style={{backgroundColor:`${humbclr}`}}></div>
          <div className={`h-[2.5px] w-5`} style={{backgroundColor:`${humbclr}`}}></div>
        </div>
      </nav>
      {/* ===========================================NAVBAR START=========================================== */}

      {/* ==============================================MAIN MENU============================================== */}
      <div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, damping: 7, stiffness: 100 }}
              className="fixed top-0 left-0 w-full h-full flex  flex-col-reverse xl:flex-row items-center justify-between p-10 lg:p-20 bg-white overflow-hidden text-black z-[99]"
            >
              <motion.div
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 40 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 justify-end h-full w-full"
              >
                <div className="text-xl md:text-2xl font-light">
                  <p className="text-base text-gray-500">GET IN TOUCH</p>
                  <p>info@dostudio.co.in</p>
                  <p>+91 9995055541</p>
                  <p>+91 9746155541</p>
                </div>
                <div className="text-xl md:text-2xl font-light">
                  <p>1st Floor, ramaswami</p>
                  <p>Cherooty Rd, behind Basics,</p>
                  <p>Vellayil, Kozhikode, Kerala,</p>
                  <p>India - 673032</p>
                </div>
              </motion.div>
              <motion.ul className="text-2xl space-y-3 lg:space-y-2 h-full flex flex-col w-full  justify-end">
                {items.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, translateX: "100%", scale: 0.8 }}
                    animate={{ opacity: 1, translateX: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      damping: 8,
                      stiffness: 80,
                      delay: item.delay || 0,
                    }}
                    key={index}
                    className="capitalize underline-hover-effect text-3xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl h-fit w-fit font-bold"
                  >
                    <Link href={item.url}>
                      {item?.ismenu ? (
                        <div onClick={handlesubMenuToggle}>our works</div>
                      ) : (
                        <div>{item.title}</div>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <div
                onClick={handleMenuToggle}
                className=" absolute  top-9 right-5 flex flex-col space-y-1 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 45 }}
                  exit={{ opacity: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-[2.5px]  w-6 bg-black"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: -45, translateY: -6 }}
                  exit={{ opacity: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-[2.5px]  w-6 bg-black"
                ></motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* =======================================MAIN MENU======================================= */}

      {/* =======================================SUB MENU======================================= */}
      <div>
        <AnimatePresence>
          {issubMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, damping: 7, stiffness: 100 }}
              className="fixed top-0 left-0 w-full h-full flex flex-col-reverse xl:flex-row items-center justify-between p-10 lg:p-20 bg-white overflow-hidden text-black z-[999]"
            >
              <motion.div
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 40 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 justify-end h-full w-full"
              >
                <div className="text-xl md:text-2xl font-light">
                  <p className="text-base text-gray-500">GET IN TOUCH</p>
                  <p>info@dostudio.co.in</p>
                  <p>+91 9995055541</p>
                  <p>+91 9746155541</p>
                </div>
                <div className="text-xl md:text-2xl font-light">
                  <p>1st Floor, ramaswami</p>
                  <p>Cherooty Rd, behind Basics,</p>
                  <p>Vellayil, Kozhikode, Kerala,</p>
                  <p>India - 673032</p>
                </div>
              </motion.div>
              <motion.ul className="text-2xl space-y-3 h-full w-full flex flex-col justify-end">
                <button
                  onClick={handlesubMenuToggle}
                  className="flex text-lg font-bold justify-start items-center gap-x-2 mb-5"
                >
                  <CgArrowLongLeft />
                  BACK
                </button>
                {/* <CgArrowLongLeft onClick={handlesubMenuToggle} className="flex justify-start text-5xl items-start mb-5 cursor-pointer bg-red-500 p-0"/> */}
                {submenu.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, translateX: "100%", scale: 0.8 }}
                    animate={{ opacity: 1, translateX: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      damping: 8,
                      stiffness: 80,
                      delay: item.delay || 0,
                    }}
                    key={index}
                    className="capitalize underline-hover-effect text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold h-fit w-fit"
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* =======================================SUB MENU======================================= */}
    </>
  );
};

export default Navbar;