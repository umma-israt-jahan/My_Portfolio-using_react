import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../assest/cart.png'
import tailwindproject from '../assest/tailwindproject.png';
import colorSearch from '../assest/colorSearch.png';
import checkbox from '../assest/checkbox .png';
// import Logindesign from '../assest/Logindesign.png';
import jwellery from '../assest/jwellery.png';
import responsiveDesign from '../assest/responsiveDesign.png';

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: cart,
      projectUrl: 'https://add-tocart-shopping.netlify.app/',
    },
    {
      id: 2,
      src: checkbox,
      projectUrl:'https://autocheck-textbox-with-react.netlify.app/' 
      
    },
    {
      id: 3,
      src: colorSearch,
      projectUrl: 'https://color-fieldwith-reactjs.netlify.app/',
    },
    {
      id: 4,
      src: responsiveDesign,
      projectUrl: 'https://umma-israt-jahan.github.io/responsive-website/index.html',
    },
    {
      id: 5,
      src: jwellery,
      projectUrl: 'https://mern-frontendtask-1cb3ef.netlify.app/',
    },
    {
      id: 6,
      src: tailwindproject,
      projectUrl: 'https://umma-israt-jahan.github.io/e-commarce-website-tailwincss/',
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-12'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
          {portfolios.map(({ id, src, projectUrl }) => (
            <div
              key={id}
              className='shadow-md shadow-gray-600 rounded-lg hover:ml-[-10px] hover:rounded-md duration-300'
            >
              <img src={src} alt={`Project ${id}`} className='rounded-md duration-200 hover:scale-105' />
              {projectUrl && (
                <div className='flex items-center justify-center'>
                  <Link to={projectUrl}>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  </Link>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
