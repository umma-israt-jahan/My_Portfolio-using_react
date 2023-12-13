import React from 'react'
import MyImg from '../assest/portfolioimg.jpg'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <>
    <div name='home' className=' h-screen w-full bg-gradient-to-b
     from-black via-black to bg-gray-800 ' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
         h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7l font-bold text-white'>
                    I'm a frontend Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have  1 Year experience building and desiging software.
                    Currently, I love to work on web application using technology like
                    Java Script,React js,Tailwind.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center
                        rounded-md-bg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                        <span className='group-hover:rotate-90 duration-300'> 
                        <IoIosArrowForward size={25} className='ml-1'/>
                        </span>

                    </Link>
                </div>
            </div>
            <div>
                <img src={MyImg} alt='My profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
    </>
  )
}

