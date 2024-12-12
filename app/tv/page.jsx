'use client'

import Filters from '@/components/Filters'
import GridView from '@/components/GridView'
import {MainBreadcrumb} from '@/components/MainBreadcrumb'
import Sort from '@/components/Sort'
import { fetchData } from '@/utils/fetchData'
import { fetchGenres } from '@/utils/fetchGenres'
import { useEffect, useState } from 'react'

const TvPage = () => {
  const [type, setType] = useState('tv')
  const [page, setPage] = useState(1)
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState(20)
  const [data, setData] = useState([])
  const [genre, setGenre] = useState('all')

  useEffect(() => {
    setTimeout(() => {
      const fetchGenresData = async () => {
        const data = await fetchGenres({ type })
        const newArr = [{id: new Date(), name: 'all'}, ...data]
        setGenres(newArr)
        setIsLoading(false)
      }
      fetchGenresData();
      }, 1500)
  }, [type])

  // ----------------------filters ---------------------
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

    const handleGenre = (e) => {
        const value = e.target.value
        setGenre(value.toLowerCase())
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
  // -------------------------------

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchAllData = async () => {
        const data = await fetchData({type, page, genre, rating, startDate, endDate })
        setData(data)
        setIsLoading(false)
      }
      fetchAllData()
    }, 1500)
  }, [type, page, genre, rating, startDate, endDate])



  return (
    <main className='mt-20 py-6 lg:py-8'>
      <div className="container main-container">
        <div className='mb-4 lg:mb-8'>
          <MainBreadcrumb page='tv shows' link={false} />
        </div>
        <div className='grid lg:grid-cols-7 xl:grid-cols-10 gap-6'>
          <div className='lg:col-span-2 xl:col-span-3 '>
            <Filters
              genres={genres}
              isLoading={isLoading}
              genre={genre}
              handleGenre={handleGenre}
              handleEndDateChange={handleEndDateChange}
              handleRating={handleRating}
              handleStartDateChange={handleStartDateChange}
              rating={rating}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className=' lg:col-span-5 xl:col-span-7  w-full h-full py-1'>
            <Sort
              movies={movies}
              type={type}
              isLoading={isLoading}
            />
              <GridView data={data} type={type} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default TvPage