"use client"
import { Fondamento } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const fonda = Fondamento({
  subsets: ["latin"],
  weight: "400"
});

const Banner = () => {
  return (
    <>
      <div className='w-full h-[100dvh]'>
        <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> {/* Centering content */}
          <TypeAnimation
            sequence={[
              'Your Health is Priority',
              1000,
              'Your Health is Crucial',
              1000,
              'Your Health is Vital',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
            repeat={Infinity}
          />
          <p className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white'>
            Welcome to <span className={`${fonda.className} text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}>medMagic</span>
          </p>
          <div className='mt-8'>
            <Link href={"/"}>
              <button type="submit" className="bg-red-600 px-2 py-2 rounded-lg text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner