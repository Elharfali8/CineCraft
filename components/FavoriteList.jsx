import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import favImg from '@/images/fav.webp'
import Link from 'next/link'

const FavoriteList = () => {
  return (
    <section className='container main-container py-6 lg:py-8 '>
          <SectionTitle text='favorite list' />
          <div className="grid gap-x-6 gap-y-10 lg:grid-cols-2 place-content-center">
              <div className='flex items-center'>
                  <div>
                  <h1 className='text-2xl md:text-3xl lg:text-4xl poppins-bold tracking-wide mb-2 lg:mb-3 primary-text'>Your Favorite Movies & TV Shows</h1>
                  <p className='secondary-text md:text-lg xl:text-xl poppins-medium dark:text-gray-400'>
                    Keep track of your favorite movies and TV shows all in one place. <br />
                    Sign in to personalize your experience and build your ultimate watchlist. <br />
                    Don't miss out on saving your top picks!
                      </p>
                      <div className='mt-4 lg:mt-6'>
                          <Link href={'/login'} className='btn-primary px-4 py-1 lg:px-8 lg:py-2 rounded-md shadow-lg capitalize tracking-wide poppins-medium md:text-lg'>
                            log in
                          </Link>
                      </div>
                  </div>
              </div>
              <div className='grid place-items-center'>
                  <Image src={favImg} alt='favorite image' width={500} height={350} className='rounded-xl shadow-lg' />
              </div>
          </div>
      </section>
  )
}

export default FavoriteList