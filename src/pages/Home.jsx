import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Sdr from './Sdr'
import WeeklyBarChart from '../Utils/WeeklyBarChart'
import SchoolUpdates from '../Utils/SchoolUpdates'

function Home() {
  const weeklyData = [10, 15, 8, 12, 20, 18, 14];
  return (
    <div>
        <Header/>
        <div className='px-6'>
            <h1 className='text-2xl mt-[2%]'>Hello Maqsud!</h1>
            <div className='mt-[5%]'>
              <h3>Attendance</h3>
                <div className='mt-2'>
                  <Sdr/>
                </div>
            </div>
            <div className='mt-[15%]'>
              <h3 className='font-medium'>Homework</h3>
              <div className='mt-2'>
                <WeeklyBarChart data={weeklyData} />
              </div>
            </div>
            <div className='mt-[10%]'>
              <SchoolUpdates/>
            </div>
            <div className='mt-[20%]'></div>
        </div>
      <Footer/>
    </div>
  )
}

export default Home