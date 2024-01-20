import Image from 'next/image';

const TopHeader = () => {
  return (
    <div className='bg-gray-900 hidden md:block  h-24'>
      <header class='body-font'>
        <div class='container mx-auto flex flex-wrap p-5 flex-col content-between items-center'>
          <nav class=' flex mt-2 -mb-2 justify-around w-full  items-center text-base '>
            <button class=' inline-flex items-center  bg-gray-100 border-2 border-orange-300 py-2.5 px-5 focus:outline-none hover:bg-gray-200  text-base'>
              Appel : +261 34 72 545 75
            </button>
            <div className='flex justify-evenly items-center w-1/4 '>
              <Image
                src='/assets/icons/Cart.png'
                alt='Cart'
                width={25}
                height={10}
              />
              <button class='inline-flex justify-around items-center text-gray-900 bg-orange-300 py-3 w-52 px-7 focus:outline-none  text-base '>
                Reservation
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default TopHeader;
