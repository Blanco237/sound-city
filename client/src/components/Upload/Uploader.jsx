import React from 'react'

import { FaCloudUploadAlt } from 'react-icons/fa'

const Uploader = ({ filetype, setFile, file }) => {

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }
  return (
    <section className='md:w-1/2 w-full flex flex-col items-center justify-center gap-1 h-72 mb-4'>
        <label className='border-2 border-primary rounded-md w-1/2 h-full flex flex-col justify-center items-center cursor-pointer hover:bg-slate-400 transition-all duration-300 active:bg-slate-600'>
            <span className='text-8xl'><FaCloudUploadAlt /></span>
            <input type={"file"} className='hidden' onChange={handleFile} accept={filetype === "Audio" ? 'audio/*' : 'image/*'} />
        </label>
        <p className={file? 'text-primary' : 'text-gray'}>{file? file.name : `No ${filetype} selected`}</p>
        <p>Upload Music {filetype}</p>
    </section>
  )
}

export default Uploader