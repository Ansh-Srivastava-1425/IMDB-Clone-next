import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className = " flex gap-4 p-4 dark:bg-gray-600 bg-amber-100 lg:text-xl justify-center" >
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
