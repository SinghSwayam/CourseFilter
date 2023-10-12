import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className=' h-[100vh] flex flex-col justify-center items-center space-y-2'>
        <div className=' custom-loader'></div>
        <p className=' text-3xl font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner