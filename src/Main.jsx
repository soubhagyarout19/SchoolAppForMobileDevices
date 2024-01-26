import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoading(false)
    },2000);
    return ()=>clearTimeout(timeout);
  },[])
  return (
    <div className='px-[10px] flex flex-col items-center mt-[30%]'>
    {
      loading && <h1 className='text-3xl font-bold'>App is Starting......</h1>
    }
    {
      !loading && <><img className='' src="https://www.pngkey.com/png/detail/360-3609686_read-more-college-girls-reading-png.png" alt="Read More - College Girls Reading Png@pngkey.com"></img>
      <h3 className='font-medium text-2xl mt-[80px]'>Educating for complexity</h3>
      <p className='text-gray-600 mt-[20px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      <Link to="/home"><button className='bg-black text-white px-20 py-2 rounded-md mt-[50px]'>Get started</button></Link></>
    }
    </div>
  )
}

export default Main
