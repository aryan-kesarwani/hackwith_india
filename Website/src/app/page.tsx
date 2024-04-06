"use client"
import React from "react";
import LandingPage from "./main-masala/LandingPage";
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion";

function page() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-[93vh] text-white bg-zinc-900">
        <LandingPage />
        </div>
        <div
    data-scroll
    data-scroll-section
    data-scroll-speed=".1"
    className="z-[999] w-full py-20 rounded-t-3xl bg-green-700"
  >
    <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className='text-[17vw] leading-none font-["Founders Grotesk] font-semibold uppercase bg-green-700 '
      >
        AGRICULTURE
      </motion.h1>
      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className='text-[17vw] leading-none font-["Founders Grotesk] font-semibold uppercase bg-green-700 '
      >
        AGRICULTURE
      </motion.h1>
    </div>

      </div>

     
    </>
  );
}

export default page;
