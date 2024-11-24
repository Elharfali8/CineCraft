import { navLinks } from '@/utils/constants'
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import SignIn from './SignIn';
import SignUp from './SignUp';

const Sidebar = ({navIsOpen, handleNav}) => {
  return (
      <aside className={` flex flex-col py-8 justify-between
         lg:hidden bg-[#F1F1F1] dark:bg-[#2B2B2B]  shadow shadow-black p-2 ${navIsOpen ? 'fixed top-20 left-0 bottom-0  w-full max-w-[400px] z-[99] translate-x-0 transition-all ease-in-out duration-150' : 'fixed top-20 left-0 bottom-0 translate-x-[-100%] z-[0] transition-all ease-in-out duration-150'}
      `}>
          <ul className='grid gap-y-4 '>
          {navLinks.map((item) => {
                      const { id, title, path, children, icon } = item
                      return (
                          <li key={id} >
                              {path ? (
                                  <Link href={path || null} className="text-xl md:text-2xl bg-slate-100 dark:bg-[#1e1e1e] tracking-wide pl-1 py-1 rounded transition-all ease-in-out duration-150 hover:bg-[#ff6f61] hover:text-white block dark:text-white dark:hover:bg-[#ff6f61]  poppins-medium ">
                              <div className='flex items-center gap-x-3'>
                              <span>{icon}</span>{title}
                              </div>
                                  </Link>
                              ) : (
                                      <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                                <Link href={'#'}  className="trigger-link text-lg xl:text-xl px-2 poppins-medium flex items-center gap-x-[2px] links main-border dark:text-white dark:hover:text-[#ff6f61] ">
                                      <div className='flex items-center gap-x-3'>
                                      <span>{icon}</span> <span className='flex items-center gap-x-1'>More <IoIosArrowDown size={24} /></span>
                                      </div>
                                                </Link>
                                              </DropdownMenuTrigger>
                                              <DropdownMenuContent
            align="start"
            sideOffset={5}
            className="hover-dropdown z-[99]  w-[200px] lg:hidden"
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
      <div className='grid place-items-center'>
        <div className="flex items-center gap-x-4">
          <SignIn />
          <SignUp />
                </div>
      </div>
    </aside>
  )
}

export default Sidebar