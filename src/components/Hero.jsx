import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 place-items-center'>
        {/* Text & Order */}
        <div className='flex flex-col items-center md:items-start text-center space-y-6'>
          <div className='flex items-center space-x-5'>
            <h1 className='text-4xl md:text-8xl font-bold text-red-600 leading-tight'>Fast</h1>
            <div className='flex flex-col'>
              <h2 className='text-3xl md:text-5xl text-left font-bold text-gray-800'>Food</h2>
              <h2 className='text-3xl md:text-5xl text-left font-bold text-gray-800'>Delivery</h2>
            </div>
          </div>
          <p className='text-lg text-gray-700'>All your favourite restaurants, delivered to your doorstep.</p>
          <div className='flex justify-center md:justify-start items-center space-x-3'>
            <span className='text-sm md:text-base text-gray-700 font-bold'>Explore our options now!</span>
            <a
              href='/restaurants'
              className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300'>
              Order Now
            </a>
          </div>
        </div>
        {/* Image */}
        <div>
          <img className='w-full max-w-md rounded-lg' src='/hero.png' alt='Fast Food Items'></img>
        </div>
      </div>
    </>
  )
}

export default Hero