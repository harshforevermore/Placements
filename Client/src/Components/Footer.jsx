import React from 'react'

const Footer = () => {
  return (
    <footer className='z-10 fixed left-1/2 -translate-x-1/2 bottom-0 text-center text-gray-500 font-medium'>
      &copy;{new Date().getFullYear()} All rights reserved
    </footer>
  )
}

export default Footer;