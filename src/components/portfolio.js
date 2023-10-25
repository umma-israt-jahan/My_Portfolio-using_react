import React from 'react'
// import { Link } from 'react-router-dom';
import tailwindproject from '../assest/tailwindproject.png'
import colorSearch from '../assest/colorSearch.png'
import checkbox  from '../assest/checkbox .png'
import Logindesign from '../assest/Logindesign.png'
import jwellery from '../assest/jwellery.png'
import responsiveDesign from '../assest/responsiveDesign.png'


export default function Portfolio() {
  
        
        const portfolios = [
            {
                id: 1,
                src: checkbox,
                projectUrl: 'https://umma-israt-jahan.github.io/responsive-website/index.html',
              },
              {
                id: 2,
                src: colorSearch,
                projectUrl: 'https://color-fieldwith-reactjs.netlify.app/', // Add your project URL
              },
              {
                id: 3,
                src: jwellery,
                projectUrl: 'https://example.com/jewellery-demo', // Add your project URL
                
              },
            {
                id:4,
                src: Logindesign,
                projectUrl: 'https://umma-israt-jahan.github.io/responsive-website/index.html', // Add your project URL
                // src: arrayDescruct
            },
            {
                id: 5,
                src: responsiveDesign,
                projectUrl: 'https://example.com/responsive-design-demo', // Add your project URL
              },
              {
                id: 6,
                src: tailwindproject,
                projectUrl: 'https://example.com/tailwind-project-demo', // Add your project URL
              },
            ];
    
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-12'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out of my work right here</p>

            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                 portfolios.map(({id,src,projectUrl})=>
                 (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg   
                    hover:ml-[-10px] hover:rounded-md duration-300'>
                    <img src={src} alt={`Project ${id}`} className='rounded-md duration-200 hover:scale-105'/>
                    {projectUrl && (
                <div className='flex items-center justify-center'>
                  {/* <Link to={projectUrl}> */}
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    
                    Demo</button>
                  {/* </Link> */}
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              )}
                </div>
                ))}
            </div>
   
        </div>
    </div>
  )
}
