import React from 'react'

function Header() {
  return (
    <>
        <div className='flex justify-between mt-[5%] px-6'>
        <i className="fa-solid fa-bars"></i>
        <p>Home</p>
        <img className='h-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ypXQlTR13qHuGin-ucRVH0O2MPT9T1b21g&usqp=CAU' alt='profilepicture'></img>
        </div>
    </>
  )
}

export default Header
