import React from 'react'

const Button = ({children, onClick}) => {
  return (
        <button onClick={onClick} className='bg-black p-[5px_30px] cursor-pointer border border-b-gray-400 rounded-2xl w-fit flex items-center gap-3 max-md:self-center'>{children}</button>
  )
}

export default Button
