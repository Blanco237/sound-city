import React from 'react'
import Heading from '../../shared/heading/Heading'

import headphones from './headphones.png'

const Login = ({ closeModal }) => {
  return (
    <aside className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-[99]' onClick={closeModal}>
        <section className='w-9/12 bg-gradient-to-r from-emerald-400 to-primary px-4 py-4 flex justify-between rounded-md shadow-lg relative' onClick={(e) => e.stopPropagation()}>
            <span className='absolute bg-white aspect-square w-8 flex justify-center items-center rounded-full text-xl font-medium -right-5 -top-4 shadow-sm cursor-pointer' onClick={closeModal}>X</span>
            <div>
                <img src={headphones} alt="Headphones" />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-1/2 text-center text-white'>
                <Heading text="Login/Sign In" color='white' styles={'text-3xl'} />
                <form className='flex flex-col gap-3 w-full'>
                    <input type="email" placeholder='Enter your Email' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <input type="password" placeholder='Enter your password' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <button className='px-5 py-1 bg-transparent border border-white mt-3 rounded-2xl hover:bg-white hover:text-secondary hover:shadow-md transition-all duration-500'>Login Now</button>
                </form>
                <div>
                    <h2 className='font-medium'>Forgot Password?</h2>
                    <p><i>Don't have an Account?</i> Register Here </p>
                </div>
            </div>
        </section>
    </aside>
  )
}

export default Login