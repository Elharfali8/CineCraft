import React from 'react'
import { Input } from "@/components/ui/input"

const SearchInput = () => {
  return (
    <div className='flex items-center shadow rounded-md'>
      <Input type="text" placeholder="Search..." className='w-full max-w-[500px] bg-slate-100 rounded-r-none text-lg' />
      <button type="button" className='px-1 search-btn h-[36px] rounded-r-md text-lg'>Search</button>
    </div>
  )
}

export default SearchInput