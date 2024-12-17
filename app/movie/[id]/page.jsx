'use client'
import { MainBreadcrumb } from "@/components/MainBreadcrumb"
import { image } from "@/utils/constants"
import { fetchSingleItem } from "@/utils/fetchSingleItem"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa6"

const SinglePage = ({params}) => {
  const { id } = useParams()
  const [type, setType] = useState('movie')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchAllData = async () => {
        const data = await fetchSingleItem({type, id})
        setData(data)
        setIsLoading(false)
      }
      fetchAllData()
    }, 1500)
  }, [id])

  
  const { title, name, backdrop_path, overview, poster_path, release_date, tagline, vote_average, genres, first_air_date, production_companies, seasons, spoken_languages } = data
  

  return (
    <div className='mt-20 min-h-[calc(100vh-80px)] py-6 lg:py-8'>
          <div className="container main-container ">
            <div className='mb-4 lg:mb-8'>
                <MainBreadcrumb page='movies' name='name' />
        </div>
        <div className="rounded-lg overflow-hidden min-h-[70vh] shadow-md" style={{
          backgroundImage: `url(${image}${data.poster_path})`,
          backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
        }}>
          <div className="grid lg:grid-cols-2 gap-6 main-opacity py-2 lg:py-4 px-4 lg:px-2 xl:px-1 h-full min-h-[70vh]" >
          <div className="grid place-items-center">
            <Image src={`${image}${backdrop_path}`} alt={name || title} width={800} height={700} className="rounded-lg max-h-[500px] lg:max-h-[700px] object-cover" />
          </div>
          <div className="flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl poppins-semibold tracking-wide text-white">{title}</h1>
              <h3 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl text-[#B0B0B0] font-semibold'>{tagline}</h3>
                      <ul className='grid gap-2 py-2'>
                        <li className='text-lg lg:text-xl text-gray-400'>
                          Release Date : <span className='text-[#FF6F61] font-semibold'>{release_date || first_air_date}</span>
                        </li>
                        <li className='text-lg lg:text-xl flex items-center gap-x-2 text-gray-400'>
                          Vote Average : <span className='text-[#FF6F61] font-semibold'>{vote_average?.toFixed(1)}</span> <span><FaStar color='orange' /></span>
                        </li>
                    </ul>
                    <h4 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl  font-semibold text-gray-400'>Languages :</h4>
                    <div className='flex flex-wrap items-center gap-2'>
                      {spoken_languages?.map((item) => {
                        return (
                          <div key={item.iso_639_1} className='flex gap-x-2 rounded-md border px-2 py-[2px] text-white'>
                            <span>{item.english_name}</span>
                            <span>{item.name}</span>
                            <span>{item.iso_639_1}</span>
                          </div>
                        )
                      })}
                    </div>
          </div>
        </div>
        </div>
        {/* ----------- */}
        <div className="h-[2px] md:h-[3px] w-full bg-black dark:bg-gray-200 my-8"  />
                  {/* ----------- */}
          </div>
    </div>
  )
}

export default SinglePage