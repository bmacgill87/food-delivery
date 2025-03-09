import React from 'react'
import RestaurantCard from './RestaurantCard';
import restaurants from '../data/restaurants.json';

const RestaurantCards = () => {
  return (
    <>
      <section className='py-12 px-6'>
        <h2 className='text-3xl text-red-600 font-quicksand font-bold underline decoration-red mb-8'>Restaurants</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {restaurants
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((restaurant) => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
        </div>
      </section>
    </>
  )
}

export default RestaurantCards