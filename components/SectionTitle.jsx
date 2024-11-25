import React from 'react'

const SectionTitle = ({text}) => {
  return (
      <div className='w-full grid place-items-center py-2 lg:py-4 mb-5 lg:mb-8'>
          <h1 className=' capitalize tracking-wider text-2xl lg:text-4xl xl:text-5xl  poppins-semibold'>{text}</h1>
    </div>
  )
}

export default SectionTitle