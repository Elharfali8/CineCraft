import { FaList } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

const Sort = ({ movies, type, isLoading }) => {
    
  return (
      <div className='flex justify-between items-center mb-3 lg:mb-5 '>
      {isLoading ? (
        <p className='text-lg lg:text-xl poppins-medium capitalize tracking-wide'>
          Loading...
        </p>
      ): (
        <p className='text-lg lg:text-xl poppins-medium capitalize tracking-wide'>
        {movies} {type === 'movie' ? 'movie' : 'tv show'}{movies > 1 && 's'}
    </p>
          )}
          <div className="grid place-items-center flex-1">
              <div className=" w-[85%] h-[2px] bg-black dark:bg-gray-300" />
          </div>
    </div>
  )
}

export default Sort