import React from 'react'

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div
        key={restaurant.name}
        className='rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow'>
        {/* Logo */}
        <div
          className={`w-full h-32 flex items-center justify-center overflow-hidden relative`}
          style={{ backgroundColor: restaurant.bgColor.replace("bg-[", "").replace("]", "") }}>
          <img
            src={restaurant.logo}
            alt={restaurant.name}
            className='max-w-[80%] max-h-[80%] object-contain'
          />
        </div>

        {/* Restaurant Info */}
        <div className='bg-gray-200 p-4 text-center'>
          <p className='text-lg font-semibold text-gray-800'>{restaurant.name}</p>
          {restaurant.locations.length > 1 ? (
            <div>
              <p className="text-sm text-gray-600">Multiple Locations</p>
              <p className="text-sm text-gray-500">Various Hours</p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600">{restaurant.locations[0].address}</p>
              <p className="text-xs text-gray-500">{restaurant.locations[0].hours}</p>
            </div>
          )}
        </div>
      </div >
    </>
  )
}

export default RestaurantCard
