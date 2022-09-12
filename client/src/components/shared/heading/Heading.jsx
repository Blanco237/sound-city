import React from 'react'

const Heading = ({ text, size, alignment='center', styles}) => {
  return (
    <h2 className={`relative font-medium text-lg  w-fit ${size? `text-[${size}]` : ''} text-[${alignment}] ${styles}`}>
        <span className='w-full absolute bottom-0 left-0 bg-fade h-[5px]'></span>
        {text}
    </h2>
  )
}

export default Heading