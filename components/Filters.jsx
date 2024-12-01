'use client'
import { useState } from 'react'
import SelectInput from './SelectInput'
import RangeInput from './RangeInput';
import DateFilter from './DateFilter';
import { Button } from "@/components/ui/button"


const Filters = ({genres, isLoading}) => {
    const [value, setValue] = useState('all')
    const [rating, setRating] = useState({ min: 0, max: 10 })

    

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState(getTodayDate())

    const handleValue = (e) => {
        const value = e.target.value
        setValue(value)
    }

    const handleRating = (e) => {
        setRating((prev) => ({ ...prev, max: e.target.value }));
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

  return (
      <div className='shadow-lg'>
          <div className='container main-container p-6 rounded-lg filters grid  gap-6'>
                {/* genres */}
                <SelectInput name='genres' label='Genres' value={value} handleValue={handleValue} genres={genres} isLoading={isLoading} />
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