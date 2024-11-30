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
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Movies</a></li>
        <li><a href="#" className="hover:text-gray-400">TV Shows</a></li>
        <li><a href="#" className="hover:text-gray-400">Trending</a></li>
        <li><a href="#" className="hover:text-gray-400">Popular</a></li>
        <li><a href="#" className="hover:text-gray-400">Favorite</a></li>
      </ul>
    </div>

    {/* More Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">More</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>

    {/* Branding & Social Media */}
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">CineCraft</h3>
      <div className="flex justify-center space-x-4">
        <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
      </div>
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