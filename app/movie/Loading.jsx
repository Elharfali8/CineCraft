import React from 'react'
import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
      <div className='grid place-items-center'>
          <LoaderCircle size={100} />
    </div>
  )
}

export default Loading