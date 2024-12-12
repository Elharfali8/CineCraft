'use client'
import { useState } from 'react'
import SelectInput from './SelectInput'
import RangeInput from './RangeInput';
import DateFilter from './DateFilter';
import { Button } from "@/components/ui/button"


const Filters = ({genres, isLoading, handleGenre, handleEndDateChange, handleRating, handleStartDateChange, rating, startDate, endDate, genre}) => {
    

  return (
      <div className='shadow-lg sticky top-[185px] '>
          <div className='container main-container p-6 rounded-lg filters grid  gap-6 w-full'>
                {/* genres */}
                <SelectInput name='genres' label='Genres'  handleGenre={handleGenre} genres={genres} genre={genre} isLoading={isLoading} />
                {/* rating */}
              <RangeInput rating={rating} handleRating={handleRating} />
              {/* release date */}
              <DateFilter startDate={startDate} endDate={endDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} />
              {/* reset button */}
              <div className='w-[90%] mx-auto grid place-items-center'>
              <Button variant="destructive" className='w-full text-lg tracking-wide'>Reset</Button>
              </div>
            </div>
      </div>
  )
}

export default Filters