import React from 'react'
import html from '../assest/html.jpg'
import css from '../assest/logo-css-3-2048.png'
import javaScript from '../assest/javascript.png'
import github from '../assest/Github.png'
import tailwind from '../assest/tailwind.png'
import reactImg from '../assest/react.png'



export default function Experience() {

    const techs=[
      {
        id:1,
        src:html,
        title:'HTML',
        style: 'shadow-orange-500'
      },
      {
        id:2,
        src:css,
        title:'CSS',
        style: 'shadow-blue-500'
      },
      {
        id:3,
        src:javaScript,
        title:'JavaScript',
        style: 'shadow-yellow-500'
      },
      {
        id:4,
        src:reactImg,
        title:'React',
        style: 'shadow-blue-500'
      },
      {
        id:5,
        src:tailwind,
        title:'TailwindCss',
        style: 'shadow-sky-400'
      },
      {
        id:6,
        src:github,
        title:'gitHub',
        style: 'shadow-gray-400'
      },
      // {
      //   id:1,
      //   src:html,
      //   title:'HTML',
      //   style: 'shadow-orange-500'
      // },
      // {
      //   id:1,
      //   src:html,
      //   title:'HTML',
      //   style: 'shadow-orange-500'
      // },
    ]


  return (
      
      <div name='experience'
       className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-96'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
          <div >
            <p  className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>  
            <p className='py-6'>These are the technologies I've worked with</p>
          </div>


          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                  techs.map(({id,src, title , style})=>(


                    <div  key={id} 
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto'/>
                <p className='mt-4'> {title}</p>
              </div>
                  ))
                }

              
          </div>

        </div>
      </div>

  )
}
