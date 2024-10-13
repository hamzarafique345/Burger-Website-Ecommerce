
import React from 'react'
export default function Footer () {
  return (
    <footer className='flex flex-col space-y-10 justify-center m-19 mb-0 bg-slate-900'>

        <nav className='flex justify-center flex-wrap gap-6 text-slate-500'>
         <a className='hover:text-cyan-500 text-amber-500 '  href='#'>Home</a>
         <a className='hover:text-cyan-500 text-amber-500 '  href='#'>About</a>
         <a className='hover:text-cyan-500 text-amber-500 '  href='#'>Delivery</a>
         <a className='hover:text-cyan-500 text-amber-500 '  href='#'>Contact</a>
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>


<div className="flex items-center justify-center h-full">
  <button
    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    <a href='https://www.facebook.com/hamza.rafique.5836711/'>Facebook  </a>
  </button>
  <button
    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    <a href='https://www.youtube.com/'>YouTube</a>
  </button>
  <button
    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    <a href='https://www.twitter.com/'>Twitter</a>
  </button>
  <button
    className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    <a href='https://www.instagram.com/hamza.rafique.5836711/?hl=en'>Instagram</a>
  </button>
</div>

        </div>
 <p className='text-center hover:text-cyan-600 text-amber-500 font-medium mb-8 '>2024 Mehak Alamgir , All Right Reserved.</p>
    <br />
    <br />
    </footer>
  )
}
