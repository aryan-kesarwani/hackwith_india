import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"

function Landing() {

  motion
  return (
    <div data-scroll data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 top-[2vh]'>
      <div className="textStructure  px-20 mt-20">
        {["Farming","Agriculture","Crops"].map((item,index)=>{
            return (
            <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                    {index===1 && (
                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className=" mr-[1vw] w-[9vw] h-[6vw] bg-red-500 relative -top-[0.1vw] rounded"></motion.div>
                    )}
            <h1 className="uppercase text-[7.5vw] font-['Founders Grotesk'] leading-[7vw] tracking-tighter font-medium">
              {item}
              </h1>
            </div>
        </div>
            );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between item-center py-5 px-20">
        {["For Public and Private Companies" ,"From the first pitch to IPO"].map((item,index)=><p className="text-md font-light tracking-tight leading-none">{item}</p>)}
        <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase ">start to scroll</div>
            <div className="w-10 h-10 flex items-center  justify-center rounded-full border-[2px] border-zinc-500">
               <span className='rotate-[45deg]'> <FaArrowUpLong/></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
