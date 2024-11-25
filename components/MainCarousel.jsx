'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {MainCard} from './MainCard'

export function MainCarousel({ mainData, type }) {
    
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1400px] container"
    >
      <CarouselContent>
              {mainData?.map((movie) => {
                  const {id} = movie
                  
                  return (
                    <CarouselItem key={id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1">
                            <MainCard type={type} {...movie} /> 
                    </div>
                  </CarouselItem>
                  )
        })}
      </CarouselContent>
      <CarouselPrevious className='dark:text-gray-600 hover:text-black' />
      <CarouselNext className='dark:text-gray-600 hover:text-black'  />
    </Carousel>
  )
}
