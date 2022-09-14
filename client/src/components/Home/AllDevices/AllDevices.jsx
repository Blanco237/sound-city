import React from 'react'

import mockup from './Mockup.png'

const AllDevices = () => {
  return (
    <section className={`w-full bg-secondary bg-transparent flex px-[6vw] py-10 flex-col md:flex-row`}>
        <div className='w-1/2 grid place-items-center'>
            <h1 className='text-left text-5xl text-white font-medium'>
                Access your <span className='text-primary'>Favorite Music</span><br/> on All <span className='text-primary'>Your Devices</span>
            </h1>
        </div>
        <div className='w-1/2 grid place-items-center'>
            <img src={mockup} alt="Sound City Mockup" className='w-full' />
        </div>
    </section>
  )
}

export default AllDevices