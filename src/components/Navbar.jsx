import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-quicksand text-white text-xl bg-red-600 hover:bg-red-700 rounded-md px-3 py-2 underline decoration-white'
      : 'font-quicksand text-white text-xl bg-red-600 hover:bg-red-700 rounded-md px-3 py-2';

  return (
    <>
      <nav className='bg-red-600 border-b border-red-700'>
        <div className='px-2 sm:px-4 lg:px-6'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <div className="flex items-center justify-center md:items-stretch md:justify-start">
              <Link className='flex flex-shrink-0 items-center mr-4' href='/'>
                <img className='h-10 w-auto' src='/logos/foodfetch.png' alt='Food Fetch'></img>
              </Link>
            </div>

            {/* Pages */}
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink
                  to='/'
                  className={linkClass}>
                  Home
                </NavLink>
                <NavLink
                  to='/restaurants'
                  className={linkClass}>
                  Restaurants
                </NavLink>
                <NavLink
                  to='/login'
                  className={linkClass}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar