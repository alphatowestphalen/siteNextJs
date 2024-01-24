import Image from 'next/image';
import BtnWithBg from '../../Botton/BtnWithBg/BtnWithBg';
const TopHeader = () => {
  return (
    <div className='bg-gray-900 hidden md:block  h-24'>
      <header className='body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col content-between items-center'>
          <nav className=' flex mt-2 -mb-2 justify-around w-full  items-center text-base '>
            <button className=' inline-flex items-center  bg-gray-100 border-2 border-orange-300 py-2.5 px-5 focus:outline-none hover:bg-gray-200  text-base'>
              {`Appel : +261 34 72 545 75`}
            </button>
            <div className='flex justify-evenly items-center w-1/4 '>
              <Image
                src='/assets/images/icons/Cart.png'
                alt='Cart'
                width={25}
                height={10}
              />
              <BtnWithBg />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default TopHeader;
