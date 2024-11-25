import React from 'react'
import { Input } from "@/components/ui/input"

const SearchInput = () => {
  return (
    <div className='flex items-center shadow rounded-md'>
      <input type="text" placeholder="Search..." className='w-full max-w-[500px] bg-slate-100 pl-2 rounded-r-none text-xl rounded-l-lg h-[40px] shadow-xl dark:text-black ' />
      <button type="button" className='px-2 search-btn h-[40px] rounded-r-md text-lg '>Search</button>
    </div>
  )
}

export default SearchInput