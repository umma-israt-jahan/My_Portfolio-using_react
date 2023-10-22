import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800  text-white pt-96'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form bellow to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/7c802952-facc-47cd-a4c6-88689bca42a1'
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter Your Name'
                    className='p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none'/>
                         <input type='text' name='email' placeholder='Enter Your Email'
                    className=' my-4 p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none'/>
                    <textarea
                    name='message'
                    placeholder='Enter Your Message'
                    rows='10'
                    className=' p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none'>
                      
                        
                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500
                        my-8 mx-auto to-blue-500 px-6 py-3 items-center rounded-md hover:scale-110 duration-300'>
                            Let's talk</button>

                    
                </form>
            </div>
        </div>
    </div>
  )
}
