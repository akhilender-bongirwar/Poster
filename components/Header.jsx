import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <section className='w-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-800 font-poppins p-4'>
      <h1 className='text-center text-4xl md:text-6xl font-semibold leading-9 tracking-normal p-4'>Backed by the best</h1>
      <p className='text-lg md:text-2xl font-light leading-9 tracking-normal text-center'>Wealthup is backed and supported by</p>
      <div className='flex items-center justify-center gap-3 p-5'>
        <Image
          src="/13.png"
          width={700}
          height={300}
          alt='tag-1'
        />
      </div>
    </section>
  )
}

export default Header
