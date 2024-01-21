import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div>
      <nav className='bg-gray-900 w-screen border-y-2 border-white'>
        <div className='px-8 mx-auto max-w-7xl'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center justify-center'>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-20 space-x-4'>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Accueil`}
                  </a>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`A propos`}
                  </a>
                  <a
                    className='text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Menu`}
                  </a>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Reservation`}
                  </a>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Galerie`}
                  </a>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Blog`}
                  </a>
                  <a
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/#'
                  >
                    {`Contact`}
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden md:block '>
              <div className='flex justify-around w-24 items-center ml-4 md:ml-6'>
                {/* <div className='flex items-center justify-center'> */}
                <Image
                  alt='fb'
                  src='/assets/images/icons/fb.png'
                  width={24}
                  height={20}
                />

                <Image
                  alt='insta'
                  src='/assets/images/icons/Insta.png'
                  width={24}
                  height={20}
                />
                
                {/* <Image
                  src='/assets/images/icons/Cart.png'
                  width={20}
                  height={20}
                /> */}
                {/* </div> */}
              </div>
            </div>
            <div className='flex -mr-2 md:hidden'>
              <button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='w-8 h-8'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Accueil`}
            </a>
            <a
              className='text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`A propos`}
            </a>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Menu`}
            </a>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Reservation`}
            </a>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Galerie`}
            </a>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Blog`}
            </a>
            <a
              className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'
            >
              {`Contact`}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
