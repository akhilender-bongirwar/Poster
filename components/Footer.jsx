import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-1500 h-386 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-800 font-poppins justify-center'>
        <Image src="/images/Scroller with logos.png"
        width={1000}
        height={500}
        alt='logo'
        />
    </div>
  )
}

export default Footer