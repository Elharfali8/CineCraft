'use client'

import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'
import { useEffect, useState } from 'react'
import { fetchTrending } from '@/utils/fetchTrending'
import SwitchTypes from './SwitchTypes'
import { SkeletonCard } from './SkeletonCard'

const Trending = () => {
    const [type, setType] = useState('movie')
    const [mainData, setMainData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      
  
        setTimeout(() => {
            const fetchMovies = async () => {
                const data = await fetchTrending({type});
                setMainData(data);
                setIsLoading(false)
              };
            fetchMovies();
      }, 2000)
    }, [type]);

    

  return (
      <section className='container main-container py-6 lg:py-8'>
          <SectionTitle text='trending now' />
          <SwitchTypes type={type} setType={setType} />
          <div className="grid place-items-center ">
              {isLoading ? (
                  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                      {Array(5).fill(0).map((_, index) => {
                          return (
                      <SkeletonCard key={index} />
                          )
                      })}
                  </div>
              ): (
                <MainCarousel type={type} mainData={mainData} />
          )}
          </div>
    </section>
  )
}

export default Trending