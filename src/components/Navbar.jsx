// eslint-disable-next-line no-unused-vars
import React from 'react'

function Navbar() {

  let Links = [
    { name: 'Home', link: './' },
    { name: 'About', link: './' },
   
  ];
  return (
    <>
    <div className="navbar flex justify-between  px-10 py-4 shadow-sm">
      <div className="nav-left flex items-center gap-6">
        <div className="pro-img w-8 h-8 bg-slate-400 rounded-full"></div>
        <ul className='flex gap-6 '>

        {Links.map((link, index) => (
          <li key={index} className="font-semibold">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}

        </ul>
      </div>
      <div className="nav-right flex items-center gap-6">
        <input type="text" placeholder='search' className='rounded-full px-4 py-1 bg-slate-300 focus:outline-none placeholder-black' />
        <button className='bg-black text-white font-semibold px-4 py-2 rounded-md'>Get Started</button>
        <div className="pro-img w-8 h-8 bg-slate-400 rounded-full"></div>
      </div>
    </div>
    </>
  )
}

export default Navbar