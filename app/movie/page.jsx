'use client'

import Filters from '@/components/Filters'
import {MainBreadcrumb} from '@/components/MainBreadcrumb'
import { fetchGenres } from '@/utils/fetchGenres'
import { useEffect, useState } from 'react'

const MoviesPage = () => {
  const [type, setType] = useState('movie')
  const [page, setPage] = useState(1)
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)


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
  }, [type, genres])
  

  return (
    <main className='mt-20 py-6 lg:py-8 h-[400vh]'>
      <div className="container main-container">
        <div className='mb-4 lg:mb-8'>
          <MainBreadcrumb page='movies' />
        </div>
        <div className='grid lg:grid-cols-6 xl:grid-cols-9 gap-6'>
          <div className='lg:col-span-2 xl:col-span-3 '>
            <Filters genres={genres} isLoading={isLoading} />
          </div>
          <div className=' lg:col-span-4 xl:col-span-6 bg-red-300 w-full h-full p-8'>

          </div>
        </div>
      </div>
    </main>
  )
}

export default MoviesPage