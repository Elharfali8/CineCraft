'use client'

import Link from "next/link"
import MainLogo from "./MainLogo"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { navLinks } from "@/utils/constants";
import { IoIosArrowDown } from "react-icons/io";
import SearchInput from "./SearchInput";
import {  FaSearch, FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)

    const handleNav = () => {
        setNavIsOpen((prev) => !prev)
    }
    
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    useEffect(() => {
        document.documentElement.setAttribute(
          'data-theme',
          isDarkMode ? 'dark' : 'light'
        );
      }, [isDarkMode]);

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev)
  }

  return (
      <nav className='h-20 w-full navbar fixed top-0 right-0 left-0 shadow-md grid place-items-center '>
          <div className="container main-container flex items-center justify-between relative">
              <Link href='/' className=" order-2 lg:order-1">
                <MainLogo />
              </Link>
              <ul className="hidden lg:flex items-center gap-x-2 lg:order-2">
                  {navLinks.map((item) => {
                      const { id, title, path, children } = item
                      return (
                          <li key={id} >
                              {path ? (
                                  <Link href={path || null} className="text-lg xl:text-xl px-2 poppins-medium links">
                                    {title}
                                  </Link>
                              ) : (
                                      <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                                <Link href={'#'}  className="trigger-link text-lg xl:text-xl px-2 poppins-medium flex items-center gap-x-[2px] links main-border">
                                                More <IoIosArrowDown size={24} />
                                                </Link>
                                              </DropdownMenuTrigger>
                                              <DropdownMenuContent
            align="start"
            sideOffset={5}
            className="hover-dropdown w-[150px]"
                                              >
                                                  {children.map((i) => {
                                              const { id, title, path, } = i
                                              return (
                                                <DropdownMenuItem key={id}>
                                                <Link href={path}  className="dropdown-link text-[#212121] capitalize transition-all ease-in-out duration-150 text-lg">
                                                  {title}
                                                </Link>
                                              </DropdownMenuItem>
                                              )
                                    })}
            
            
          </DropdownMenuContent>
                                          </DropdownMenu>
                                      </div>
                                          
                              )}
                          </li>
                      )
                  })}
        </ul>
        <div className=" flex items-center gap-x-4 order-3 ">
          <button type="button" onClick={handleSearchOpen}>
            <FaSearch size={26} className="links" />
          </button>
          <motion.div
                onClick={toggleTheme}
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            className="theme-toggle cursor-pointer text-xl"
            >
                {isDarkMode ? "🌙" : "☀️"}
          </motion.div>
          <div className="hidden lg:flex items-center gap-x-2 lg:order-4">
          <SignIn />
          <SignUp />
        </div>
        </div>
        {isSearchOpen && (
          <div className="absolute top-[68px] right-1   z-[80]">
            <SearchInput />
          </div>
        )}
        <motion.div
        onClick={handleNav}
        className="theme-toggle cursor-pointer lg:hidden" 
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: navIsOpen ? 180 : 0 }} 
        transition={{ duration: 0.5 }}
      >
        {navIsOpen ? <FaTimes size={26} /> : <FaBarsStaggered size={26} />}
        </motion.div>
        
          </div>
    </nav>
  )
}

export default Navbar

