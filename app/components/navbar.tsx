'use client';

import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import Link from 'next/link';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false)
      } else {
        // Scrolling up
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={` fixed top-0 left-0 w-full bg-gray-600  text-white p-4 transition-all duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full '
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-white  to-pink-500 
        animate-pulse drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] text-3xl font extrabold">
         <Link href="/">  SYHZ </Link></div>
        <div className="justify-center text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-800 
        font-extrabold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] ">PORTFOLIO</div>
        <ul className="flex space-x-4 mr-2">
          <li><Link href="/" className='hover:text-orange-400  '>Home</Link></li>
          <li><Link href="/About" className='hover:text-orange-400 ' >About</Link></li>
          <li><Link href="/Contact" className='hover:text-orange-400 '>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-600 p-3">
//         <div className="flex items-center justify-between">
//             <div className="text-transparent bg-clip-text bg-gradient-to-r from-white  to-pink-500 animate-pulse drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] text-3xl font extrabold">
//                 SYHZ
//             </div>
//             <div className="justify-center text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-800 font-extrabold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] ">PORTFOLIO</div>
        
//       <ul className="flex space-x-6 justify-end mr-3">
//         <li>
//           <Link
//             href="/"
//             className="text-white font-bold hover:text-orange-300"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/About"
//             className="text-white font-bold hover:text-orange-300"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/Contact"
//             className="text-white font-bold hover:text-orange-300"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
