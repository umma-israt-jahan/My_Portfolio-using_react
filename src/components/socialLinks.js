import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export default function SocialLinks() {

  const links =[
    {
      id:1,
      child:(
        <>
              Linkedin<FaLinkedin size={30}/>
            </>
      ),
      href:'https://www.linkedin.com/in/umme-israt-jahan-fariha-3400a6174/',
      style:'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
              Github<FaGithub size={30}/>
            </>
      ),
      href:'https://github.com/umma-israt-jahan',
      style:'rounded-tr-md'
    },
    {
      id:3,
      child:(
        <>
              Mail<HiOutlineMail size={30}/>
            </>
      ),
      href:'mailto:isratfariha58@gmail.com ',
      style:'rounded-tr-md'
    },
    {
      id:4,
      child:(
        <>
              Resume<BsFillPersonLinesFill size={30}/>
            </>
      ),
      href:'/Umme_Israt_Jahan(CV).pdf',
      style:'rounded-br-md',
      download:true,
    },
  ]


  return (
    <div className=' lg:flex flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download})=> (

          <li key={id} className='flex justify-between items-center w-40 h-14
            px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300' >
          <a href={href} className='flex justify-between items-center
            w-full text-white' 
            download={download}
            target='_blank'
            rel="noreferrer">
             
            {child}
          </a>
          </li>

        ))}



       
      </ul>

    </div>
  )
}
