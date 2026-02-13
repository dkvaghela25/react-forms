import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const sendData = async ({request}) => {
  const res = await request.formData();
  const obj = Object.fromEntries(res);
  console.log(obj);
}

const Contact = () => {

  return (
    <div className='flex flex-col items-center p-15 w-full gap-5'>
      <div className='text-4xl font-extrabold'>Contact Us</div>
      <Form method='POST' action='/contact' className='w-[50%] max-md:w-full flex flex-col items-center gap-5'>
        <input
          className='border border-gray-400 p-2 w-[60%] rounded-lg max-md:w-full'
          type="text"
          name='name'
          id="name"
          placeholder='Enter Your Name'
          />
        <input
          className='border border-gray-400 p-2 w-[60%] rounded-lg max-md:w-full'
          type="email"
          name='email'
          id="email"
          placeholder='Enter you email'
          />
        <textarea
          className='border border-gray-400 p-2 w-[60%] rounded-lg h-50 max-md:w-full'
          name='message'
          id="message"
          placeholder='Enter you Message'
          ></textarea>
        <input 
        type="submit"
        className='bg-black p-[5px_30px] cursor-pointer border border-b-gray-400 rounded-2xl w-fit'
        value="Send Message"
        />
      </Form>
    </div>
  )
}

export default Contact
