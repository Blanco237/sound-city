import React from 'react'

const Heading = ({ text, alignment='center', styles, color='blue'}) => {
  return (
    <h2 className={`relative font-medium ${styles} text-lg  w-fit text-[${alignment}]`}>
        <span className={`w-full absolute bottom-0 left-0 h-[5px] ${color==='blue'? 'bg-fade' : 'bg-fade-white'}`}></span>
        {text}
    </h2>
  )
}

export default Heading