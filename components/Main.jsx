import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#0A5783] w-full h-auto font-poppins'>
      <h2 className='text-4xl font-extrabold leading-15 tracking-normal text-center p-5 pt-10 pb-10'>
        Transforming Lives - Financially!
      </h2>
      <section className='flex flex-col md:flex-row pt-8 pb-8'>
        <div className='flex flex-col md:w-[50%]'>
          <div className='w-373 h-123 flex gap-3 pl-20'>
            <Image
              src="/images/p1.png"
              width={80}
              height={80}
              className='rounded-full'
              alt='profile'
            />
            <div className='flex flex-col'>
              <h2>Simrin Sirur</h2>
              <p>Journalist</p>
              <p>The Print, Gurugram</p>
            </div>
          </div>
          <div className='h-100 pl-20 ml-20 '>
            <p className='break-words text-base font-normal leading-8 tracking-normal text-left '>
              "I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."
            </p>
          </div>
        </div>
        <div className='flex relative top-[-70px] pl-10'>
          <Image
            src="/images/arrow.svg"
            width={20}
            height={40}
            alt='arrow'
          />
          <Image
            src="/images/11.png"
            width={380}
            height={100}
            className=''
            alt='photo'
          />
        </div>
      </section>
    </div>
  )
}

export default Main
