import React from 'react'
import MainLogo from './MainLogo'
import Link from 'next/link'
import { navLinks } from '@/utils/constants'

const Footer = () => {
  return (
      <footer className="bg-[#f8f9fa] dark:bg-[#1e1e1e] py-8">
  <div className="container main-container grid grid-cols-3 gap-8">
    {/* Links Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Links</h3>
      <ul className="space-y-2">
        <li><Link href="#" className="hover:text-gray-400">Home</Link></li>
        <li><Link href="#" className="hover:text-gray-400">Movies</Link></li>
        <li><Link href="#" className="hover:text-gray-400">TV Shows</Link></li>
        <li><Link href="#" className="hover:text-gray-400">Trending</Link></li>
        <li><Link href="#" className="hover:text-gray-400">Popular</Link></li>
        <li><Link href="#" className="hover:text-gray-400">Favorite</Link></li>
      </ul>
    </div>

    {/* More Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">More</h3>
      <ul className="space-y-2">
        <li><Link href="#" className="hover:text-gray-400">About</Link></li>
        <li><Link href="#" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </div>

    {/* Branding & Social Media */}
    <div className="text-center">
      <h3 className="text-2xl lg:text-3xl font-bold mb-4">CineCraft</h3>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-8 text-center text-sm text-gray-500">
    © 2024 CineCraft. All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer