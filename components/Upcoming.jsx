'use client'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { fetchUpcoming } from '@/utils/upcoming'
import { MainCarousel } from './MainCarousel'
import { SkeletonCard } from './SkeletonCard'

const Upcoming = () => {
    const [mainData, setMainData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      
  
        setTimeout(() => {
            const fetchMovies = async () => {
                const data = await fetchUpcoming();
                setMainData(data);
                setIsLoading(false)
              };
            fetchMovies();
      }, 2000)
    }, []);
  
  console.log(mainData);
  

  return (
    <section className='container main-container py-6 lg:py-8 '>
      <SectionTitle text='coming soon' desc='upcoming movies' />
      <div className="grid place-items-center">
        {isLoading ? (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
          {Array(5).fill(0).map((_, index) => {
              return (
          <SkeletonCard key={index} />
              )
          })}
      </div>
        ) : (
          <MainCarousel type='movie' mainData={mainData} />
        )}
      </div>
      </section>
  )
}

export default Upcoming