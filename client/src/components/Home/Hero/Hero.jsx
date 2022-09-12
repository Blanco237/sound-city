import React from 'react'

import banner from './banner.png'
import waves from './waves.gif'

const Hero = () => {
  return (
    <section className='px-[6vw] pb-4 flex md:flex-row flex-col items-center bg-secondary text-white' >
        <div className='md:w-1/2 w-full'>
            <img src={banner} alt="Girl with Microphone" />
        </div>
        <div className='md:w-1/2 w-full md:text-6xl text-4xl pr-6 gap-2 flex flex-col font-bold text-center md:text-left relative' style={{isolation: 'isolate'}}>
            <img src={waves} alt="Music Waves" className='absolute opacity-40 z-[-1]' />
            <h1>Listen to <span className='text-primary'>Your Music</span></h1>
            <h1>Everywhere</h1>
            <h1 className='text-primary shadow'>Everytime</h1>
            <section className='text-base md:mt-10 mt-4 flex gap-4 w-full justify-center md:justify-start'>
                <button className='btn-primary'>Listen Now</button>
                <button className='btn-primary'>Sign In</button>
            </section>
        </div>
    </section>
  )
}

export default Hero