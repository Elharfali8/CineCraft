'use client'

import { useState } from "react"

const RangeInput = ({rating, handleRating}) => {

  return (
      <div className='grid w-[90%] mx-auto'>
          <label htmlFor='rating' className='text-white tracking-wide poppins-semibold text-lg lg:text-xl mb-2'>Rating :</label>
          <div className="flex items-center justify-between lg:text-lg text-gray-100">
              <span>min: <span className="text-white poppins-medium">{rating.min}</span></span>
              <span>max: <span className="text-white poppins-medium">{rating.max}</span></span>
          </div>
          <input
              type="range"
              name="rating"
              id="rating"
              min={rating.min}
              max={10}
              step={1}
              value={rating.max}
              onChange={handleRating}
          />
    </div>
  )
}

export default RangeInput