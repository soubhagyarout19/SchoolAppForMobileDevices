import React from 'react'
import Footer from '../common/Footer'
import Calender from '../Utils/Calander'
import { Link } from 'react-router-dom'

function Assignment() {
  return (
    <div className='px-6 mt-[5%]'>
    {/* <div className='h-[90vh]'></div> */}
      <div className='flex items-center gap-[35%]'>
        <Link to={"/home"}><i className="fa-solid fa-arrow-left"></i></Link>
        <h3 className='font-medium'>Assignment</h3>
      </div>
      <div className='mt-6'>
        <Calender/>
      </div>
      <Footer/>
    </div>
  )
}

export default Assignment
