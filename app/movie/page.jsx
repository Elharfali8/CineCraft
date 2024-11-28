import React from 'react'
import {MainBreadcrumb} from '@/components/MainBreadcrumb'

const MoviesPage = () => {
  return (
    <main className='mt-20 py-6 lg:py-8'>
      <div className="container main-container">
        <MainBreadcrumb page='movies' />
      </div>
    </main>
  )
}

export default MoviesPage