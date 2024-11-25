'use client'
import Link from "next/link"
import { motion } from "framer-motion"

const HeroHeadline = () => {
    
  return (
      <div className="text-center py-20 bg-[rgba(20,20,20,0.6)] rounded-xl">
          <div className="mb-12">
              
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Welcome to <span className="text-accent">CineCraft</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl  mt-4 text-slate-100 poppins-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        Discover the best movies and TV shows, curated just for you.
          </motion.p>
          </div>

          <Link href={'/discover'} className='btn-primary px-6 py-2 text-lg md:text-xl lg:text-2xl tracking-wide poppins-semibold shadow-md rounded-lg hover:shadow-lg ' >
                            Discover
          </Link>
          <div className="mt-10 lg:mt-12 space-x-4">
              <Link href={'/popular'} className=" px-4 py-1 rounded text-white border text-lg capitalize transition-all ease-in-out duration-150 hover:bg-white  poppins-medium lg:text-xl">
                  popular</Link>
                  <Link href={'/trending'} className=" px-4 py-1 rounded text-white border text-lg capitalize transition-all ease-in-out duration-150 hover:bg-white  poppins-medium lg:text-xl">
                  Trending</Link>
          </div>
          
    </div>
  )
}

export default HeroHeadline