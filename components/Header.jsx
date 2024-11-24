'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

    const handleNav = () => {
        setNavIsOpen((prev) => !prev)
    }
  return (
      <div>
      <Navbar navIsOpen={navIsOpen} handleNav={handleNav} setNavIsOpen={setNavIsOpen} />
      <Sidebar navIsOpen={navIsOpen} handleNav={handleNav} />
    </div>
  )
}

export default Header