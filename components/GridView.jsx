import React from 'react'
import GridItem from './GridItem'
import { MainCard } from './MainCard'
import { Loader } from 'lucide-react'

const GridView = ({ data, type, isLoading }) => {

  if (isLoading) {
    return (
      <div className='h-[calc(60vh-80px)] grid place-items-center'>
        <Loader size={50} />
      </div>
    )
  }
    

  return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {data.map((item) => {
              return (
                  <MainCard key={item.id} type={type} {...item} />
              )
          })}
    </div>
  )
}

export default GridView