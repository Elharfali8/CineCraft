

const SwitchTypes = ({ type, setType }) => {
    
    const handleType = (e) => {
        const selectedType = e.target.dataset.btn
        setType(selectedType)
    }
    
  return (
      <div className="flex items-center mb-6">
          <button type="button" data-btn='movie' className={`py-1 px-3  border-[2px] sm:text-lg lg:text-xl poppins-medium border-[#ff6f61] rounded-l-md ${type === 'movie' ? 'text-white bg-[#ff6f61]' : 'text-[#ff6f61]'}` } onClick={handleType}>Movies</button>
          <button type="button" data-btn='tv' className={`py-1 px-3  border-[2px] sm:text-lg lg:text-xl poppins-medium border-[#ff6f61] rounded-r-md ${type === 'tv' ? 'text-white bg-[#ff6f61]' : 'text-[#ff6f61]'}` } onClick={handleType}>Tv Shows</button>
    </div>
  )
}

export default SwitchTypes