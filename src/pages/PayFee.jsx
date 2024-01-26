import React from 'react'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

function PayFee() {
  return (
    <div>
        <div className='h-[90vh] flex flex-col justify-center items-center'>
          <p className='bg-gray-300 p-6 rounded-md font-medium'>
            This is Payfee Page
          </p>
          <Link to={"/home"}><p className='bg-red-600 text-white p-2 mt-5 rounded-md'>Go Back</p></Link>
        </div>
      <Footer/>
    </div>
  )
}

export default PayFee
