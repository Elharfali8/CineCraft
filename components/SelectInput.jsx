import React from 'react'

const SelectInput = ({name, value, handleValue, genres, label, isLoading}) => {
  return (
      <div className='grid w-[90%] mx-auto'>
          <label htmlFor={name} className='text-white tracking-wide poppins-semibold text-lg lg:text-xl mb-2'>{label} :</label>
          <select name={name} id={name} onChange={handleValue} className='bg-white text-black dark:bg-gray-200 rounded-md focus:outline-none shadow-lg py-2 pl-1 capitalize lg:text-lg poppins-medium'>
              {isLoading && <option value={'Loading...'}>
                Loading...
              </option>}
              {genres.map((d) => {
                  return (
                      <option key={d.id} value={d.name}>
                          {d.name}
                      </option>
                  )
              })}
          </select>
    </div>
  )
}

export default SelectInput