import React from 'react'

const DateFilter = ({startDate, endDate, handleEndDateChange, handleStartDateChange}) => {
  return (
    <div className="grid gap-4 w-[90%] mx-auto text-black poppins-medium">
                    <div>
                        <label htmlFor="startDate" className="text-white tracking-wide poppins-semibold text-lg lg:text-xl mb-2">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={handleStartDateChange}
                            className="p-2 rounded border w-full shadow-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="text-white tracking-wide poppins-semibold text-lg lg:text-xl mb-2">
                            End Date:
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            value={endDate}
                            onChange={handleEndDateChange}
                            className="p-2 rounded border w-full shadow-lg"
                        />
                    </div>
                </div>
  )
}

export default DateFilter