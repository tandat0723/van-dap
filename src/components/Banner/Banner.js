'use client'
import React from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className='mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="">
        <h1 className="text-amber-300 text-5xl md:text-6xl lg:text-8xl font-bold pb-4">
          <TypeAnimation
            sequence={[
              "Vấn Đáp",
              1000,
              "Phong Thần",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </motion.div>
    </div>
  )
}

export default Banner