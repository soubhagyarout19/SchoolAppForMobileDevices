import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation();
  
  return (
        <div className='flex justify-around text-gray-400 fixed bottom-0 inset-x-0 bg-white p-1'>
        <Link to={"/home"}><div className={`flex flex-col items-center ${location.pathname === "/home" ? "text-green-500" : ""}`}><i className="fa-solid fa-house"></i><p>Home</p></div></Link>
        <Link to={"/assignment"}><div className={`flex flex-col items-center ${location.pathname === "/assignment" ? "text-green-500" : ""}`}><i className="fa-solid fa-list-check"></i><p>Assignment</p></div></Link>
        <Link to={"/homework"}><div className={`flex flex-col items-center ${location.pathname === "/homework" ? "text-green-500" : ""}`}><i className="fa-solid fa-briefcase"></i><p>Homework</p></div></Link>
        <Link to={"/payfee"}><div className={`flex flex-col items-center ${location.pathname === "/payfee" ? "text-green-500" : ""}`}><i className="fa-solid fa-paperclip"></i><p>Pay Fee</p></div></Link>
    </div>
  )
}

export default Footer
