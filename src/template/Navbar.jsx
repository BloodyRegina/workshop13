// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full  bg-slate-50 border-gray-400 shadow-amber-300 shadow-inner rounded-b-xl border-1">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4">
      <div className='flex items-center justify-center'><img className='w-16' src="https://static.vecteezy.com/system/resources/thumbnails/004/699/890/small/it-letter-logo-isolated-on-white-background-vector.jpg" alt="" />Soi 7 IT</div>
      <div className="flex items-center space-x-3 rtl:space-x-reverse gap-4">
        <input type="text" placeholder='Anything' className='bg-slate-200 rounded-md'/>
        <a href="">Search</a>
      </div>
      </div>
    </nav>
  )
}

export default Navbar