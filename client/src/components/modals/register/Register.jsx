import React from 'react'
import Heading from '../../shared/heading/Heading'
import Rlink from '../../shared/link/Rlink'

import headphones from './headphones.png'

const Register = ({ closeModal, login }) => {
  return (
    <aside className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-[99]' onClick={closeModal}>
        <section className='md:flex-row flex-col items-center gap-2 w-10/12 md:w-9/12 bg-gradient-to-r from-emerald-400 to-primary px-4 py-4 flex justify-between rounded-md shadow-lg relative animate-in zoom-in-50 duration-500' onClick={(e) => e.stopPropagation()}>
            <span className='absolute bg-white aspect-square w-8 flex justify-center items-center rounded-full text-xl font-medium -right-5 -top-4 shadow-sm cursor-pointer' onClick={closeModal}>X</span>
            <div className='md:w-1/2 w-1/5'>
                <img src={headphones} alt="Headphones" className='w-full' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-full md:w-1/2 text-center text-white'>
                <Heading text="Register / Sign Up" color='white' styles={'text-3xl'} />
                <form className='flex flex-col gap-3 w-full'>
                <input type="text" placeholder='Enter your Name' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <input type="email" placeholder='Enter your Email' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <input type="password" placeholder='Enter your password' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <input type="password" placeholder='Confirm password' className='px-4 py-1 rounded shadow-md text-secondary' />
                    <button className='px-5 py-1 bg-transparent border border-white mt-3 rounded-2xl hover:bg-white hover:text-secondary hover:shadow-md transition-all duration-500'>Register Now</button>
                </form>
                <div>
                    <p className='flex gap-2'><i>Already have an Account?</i> <Rlink text="Login Here" color="white" onClick={login}/> </p>
                </div>
            </div>
        </section>
    </aside>
  )
}

export default Register