import React from 'react'

const SectionTitle = ({text, desc}) => {
  return (
      <div className='w-full grid place-items-center py-2 lg:py-4 mb-5 lg:mb-8'>
      <h1 className=' capitalize tracking-wider text-3xl lg:text-4xl xl:text-5xl  poppins-semibold'>{text}</h1>
      {desc && <p className='mt-1 lg:mt-3 secondary-text capitalize sm:text-lg tracking-wide lg:text-xl poppins-medium dark:text-gray-400'>{desc}</p>}
    </div>
  )
}

export default SectionTitle