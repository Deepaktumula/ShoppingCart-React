import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center mx-auto">
        <div className='spinner '>
        </div>
          <p className='font-semibold text-xl'>Loading</p>
    </div>
  )
}

export default Spinner