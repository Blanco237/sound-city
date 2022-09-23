import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { notify } from 'react-notify-toast'
import { useNavigate } from 'react-router-dom'
import LoadingContext from '../../../Context/LoadingContext'
import { registerUser, loginWithGoogle } from '../../../firebase/auth'
import useWindowSize from "../../../hooks/useWindowSize";
import Heading from '../../shared/heading/Heading'
import Rlink from '../../shared/link/Rlink'

import headphones from './headphones.png'

const Register = ({ closeModal, login }) => {

    const [formData, setForm] = useState({});
    const { handleLoading } = useContext(LoadingContext);
    const { width: size } = useWindowSize();

    const navigator = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.cfmPassword){
            notify.show("Passwords don't match", "error", 3000);
            return;
        }
        handleLoading(true);
        const res = await registerUser(formData);
        handleLoading(false);
        if(res.success){
            try{
                notify.show("Registered Successfully", 'success', 2500);
              }
              catch(e){
                console.log(e);
              }
              finally{
                closeModal();
                navigator("../library", { replace: true });
              }
        }
        else{
            notify.show(res.emessage, "error");
        }
    }

    const googleLogin = async () => {
        handleLoading(true);
        const res = await loginWithGoogle(size);
        handleLoading(false);
        if (res.success) {
          try {
            notify.show("Google Login Success", "success", 2500);
          } catch (e) {
            console.log(e);
            console.log("Changed page??");
          } finally {
            closeModal();
            navigator("../library", { replace: true });
          }
        } else {
          notify.show(res.emessage, "error");
        }
      };

  return (
    <aside className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-[99]' onClick={closeModal}>
        <section className='md:flex-row flex-col items-center gap-2 w-10/12 md:w-9/12 bg-gradient-to-r from-emerald-400 to-primary px-4 py-4 flex justify-between rounded-md shadow-lg relative animate-in zoom-in-50 duration-500' onClick={(e) => e.stopPropagation()}>
            <span className='absolute bg-white aspect-square w-8 flex justify-center items-center rounded-full text-xl font-medium -right-5 -top-4 shadow-sm cursor-pointer' onClick={closeModal}>X</span>
            <div className='md:w-1/2 w-1/5'>
                <img src={headphones} alt="Headphones" className='w-full' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-full md:w-1/2 text-center text-white'>
                <Heading text="Register / Sign Up" color='white' styles={'text-3xl'} />
                <form className='flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder='Enter your Name' className='px-4 py-1 rounded shadow-md text-secondary' name="Name" />
                    <input onChange={handleChange} type="email" placeholder='Enter your Email' className='px-4 py-1 rounded shadow-md text-secondary' name="email" required />
                    <input onChange={handleChange} type="password" placeholder='Enter your password' className='px-4 py-1 rounded shadow-md text-secondary' name="password" required minLength={6} />
                    <input onChange={handleChange} type="password" placeholder='Confirm password' className='px-4 py-1 rounded shadow-md text-secondary' name="cfmPassword" required minLength={6}/>
                    <button className='px-5 py-1 bg-transparent border border-white mt-3 rounded-2xl hover:bg-white hover:text-secondary hover:shadow-md transition-all duration-500'>Register Now</button>
                </form>
                <button className='px-5 py-1 font-medium active:shadow-none border border-white mt-3 rounded-2xl bg-white text-secondary hover:shadow-md transition-all duration-500' onClick={googleLogin}>Login with Google</button>
                <div>
                    <p className='flex gap-2'><i>Already have an Account?</i> <Rlink text="Login Here" color="white" onClick={login}/> </p>
                </div>
            </div>
        </section>
    </aside>
  )
}

export default Register