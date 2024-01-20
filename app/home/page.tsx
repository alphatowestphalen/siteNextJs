
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Cardflex from '../component/Card/Cardflex';
import BottonWithBorder from '../component/Botton/BottonWithBorder/BottonWithBorder';

const HomePage: React.FC = () => {
  const [title,setTitle] = useState<string>('Reservation')
  const [menu,setMenu] = useState<string>('menu')
  return (
    <>
      <div className=' pt-10 flex justify-center overflow-hidden  bg-white dark:bg-gray-900'>
        <div className='container relative flex pr-12 py-12 ml-12 '>
          <div className='relative z-20 flex justify-between flex-col sm:w-2/3 lg:w-2/5'>
            <span className='w-20 h-2 mb-12 bg-gray-800 dark:bg-white'></span>
            <h1
              style={{
                fontFamily: 'cormorant',
              }}
              className='flex flex-col text-4xl font-black leading-normal text-gray-800  md:text-8xl md:w-screen dark:text-white'
            >
              {`Bienvenue au`}
            </h1>
            <span
              style={{
                fontFamily: 'cormorant',
                // fontSize: '83px',
              }}
              className=' text-4xl font-black leading-none text-gray-800 md:w-screen dark:text-white md:text-7xl'
            >
              {`La table du rova`}
            </span>
            <p
              style={{ fontFamily: 'Josefin_Sans', fontSize: '20px' }}
              className='mt-4 text-gray-700 text-sm leading-snug sm:text-base dark:text-white'
            >
             {` Une nouvelle étape gourmande sur la RN7 à FIANARANTSOA au cœur de
              la Haute Ville, quartier historique éminemment pittoresque.`}
            </p>
            <div className='mt-10'>
              <a
                style={{ fontFamily: 'Josefin_Sans' }}
                href='#'
                className='px-4 py-3 text-pink-500 uppercase bg-transparent border-2 border-orange-300 dark:text-white hover:bg-orange-300 hover:text-gray-900 text-md'
              >
                {`Voire Menu`}
              </a>
            </div>
          </div>
          <div className='relative z-50 hidden md:ml-52 sm:block sm:w-1/3 lg:w-5/6'>
            <Image
              alt='image'
              width={600}
              height={400}
              src='/assets/home/image.png'
              className=' max-w-xs w-96 m-auto md:max-w-sm'
            />
          </div>
        </div>
      </div>

      <section className='text-gray-600 bg-rose-50 body-font'>
        <div className='container  px-5 py-20 mx-auto'>
          <div className='flex  flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0'>
            <div className='p-4 md:w-1/3 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='location'
                  src='/assets/images/icons/Location.png'
                  width={25}
                  height={20}
                />
              </div>
              <div
                style={{ fontFamily: 'Josefin_Sans' }}
                className='flex-grow pl-6'
              >
                <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
                  {`Localisation`}
                </h2>
                <p className='leading-relaxed text-base'>
                  {`IR 19, Ville Haute Fianarantsoa`}
                </p>
              </div>
            </div>
            <div
              style={{ fontFamily: 'Josefin_Sans' }}
              className='p-4 md:w-1/3 flex'
            >
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='group42'
                  src='/assets/images/icons/Group42.png'
                  width={25}
                  height={20}
                />
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
                  {`Heurs Ouverture`}
                </h2>
                <p className='leading-relaxed text-base'>
                  {`7jours / 7 9:00 AM - 9:00 PM`}
                </p>
              </div>
            </div>
            <div
              style={{ fontFamily: 'Josefin_Sans' }}
              className='p-4 md:w-1/3 flex'
            >
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='reserver'
                  src='/assets/images/icons/Reserve.png'
                  width={25}
                  height={20}
                />
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
                  {`Reservation`}
                </h2>
                <p className='leading-relaxed text-base'>
                  {`latabledurova@gmail.com`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className='text-gray-600 text-bol body-font overflow-hidden'>
          <div className='container  px-5 py-5 mb-16 mx-auto '>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <Image
                width={400}
                height={100}
                alt='ecommerce'
                className='lg:w-1/2 object-cover rounded-lg'
                src='/assets/home/histoire.png'
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0'>
                <h1
                  style={{ fontFamily: 'cormorant' }}
                  className='text-gray-900 py-5 text-3xl title-font font-semibold'
                >
                  {`Histoire`}
                </h1>
                <p
                  style={{ fontFamily: 'Josefin_Sans' }}
                  className='leading-relaxed'
                >
                  {`Au cœur de la vieille ville de Tanana Ambony, La Table du Rova
                  émerge comme un joyau gastronomique créé par une équipe de
                  jeunes entrepreneurs. Inspiré par l'héritage culturel de
                  Madagascar, ce restaurant tire son nom du célèbre Rova,
                  symbolisant la richesse de la nation. Spécialisé dans les
                  brochettes malagasy, La Table du Rova offre bien plus qu'un
                  repas ; c'est une expérience gastronomique où l'histoire, la
                  tradition et la cuisine se marient harmonieusement. Fondé sur
                  la passion de ses chefs, le restaurant célèbre la diversité
                  culinaire de Madagascar, invitant les convives à un voyage
                  mémorable à travers chaque plat. Aujourd'hui, La Table du Rova
                  continue d'être un lieu où la culture et la cuisine se
                  rencontrent, créant une aventure gustative captivante.`}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container  px-5 mt-20 md:pt-20 mx-auto justify-center flex flex-wrap'>
          <div className=' mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <h3
              style={{ fontFamily: 'Josefin_Sans' }}
              className=' inline-block px-6 py-1  text-sm border-orange-300 border-y-2'
            >
              MENU
            </h3>
            <div className='w-72'>
              <h1
                style={{ fontFamily: 'cormorant' }}
                className='w-auto font-black pt-3 text-3xl leading-none text-gray-800  font-bebas-neue'
              >
                {`Essayez nos offres spéciales.`}
              </h1>
              <p style={{ fontFamily: 'Josefin_Sans' }} className='py-3 '>
                {`Découvrez l'exceptionnel avec nos offres spéciales qui vont
                égayer votre expérience et vous offrir des avantages exclusifs.`}
              </p>
            </div>
            <Image
              width={300}
              height={50}
              alt='ecommerce'
              className='lg:w-auto pt-4 w-full object-cover'
              src='/assets/images/home/menu.png'
            />
            {/* <img alt='feature' class='object-cover object-center h-full w-full' src='https://dummyimage.com/460x500'> */}
          </div>
          <div className='flex flex-col  flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-24 lg:text-left text-center'>
            <h1
              style={{ fontFamily: 'cormorsant' }}
              className='w-auto font-semibold text-2xl leading-none text-gray-800  font-bebas-neue sm:text-8x'
            >
              Entrées (15 000Ar)
            </h1>
            <div className=' md:w-2/3 pt-9 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='vilanykely'
                  src='/assets/images/home/vilany kely.png'
                  width={100}
                  height={50}
                />
              </div>
              <div className='flex-grow text-left pl-3'>
                <h2
                  style={{ fontFamily: 'cormorant' }}
                  className='text-gray-900 text-lg pl-0 title-font font-medium '
                >
                  Salady Malagasy
                </h2>
                <p
                  style={{ fontFamily: 'Josefin_Sans' }}
                  className='leading-relaxed text-base'
                >
                  Candied Jerusalem artichokes.
                </p>
              </div>
            </div>
            <div className=' md:w-2/3 pt-4 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='vilanykely'
                  src='/assets/images/home/vilany kely.png'
                  width={100}
                  height={50}
                />
              </div>
              <div className='flex-grow text-left pl-3'>
                <h2
                  style={{ fontFamily: 'cormorant' }}
                  className='text-gray-900 text-lg pl-0 title-font font-medium '
                >
                  Assiette du chef
                </h2>
                <p
                  style={{ fontFamily: 'Josefin_Sans' }}
                  className='leading-relaxed text-base'
                >
                  Candied Jerusalem artichokes.
                </p>
              </div>
            </div>
            <div className=' md:w-2/3 pt-4 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='vilanykely'
                  src='/assets/images/home/vilany kely.png'
                  width={100}
                  height={50}
                />
              </div>
              <div className='flex-grow text-left pl-3'>
                <h2
                  style={{ fontFamily: 'cormorant' }}
                  className='text-gray-900 text-lg pl-0 title-font font-medium '
                >
                  Tartare du rova
                </h2>
                <p
                  style={{ fontFamily: 'Josefin_Sans' }}
                  className='leading-relaxed text-base'
                >
                  Candied Jerusalem artichokes.
                </p>
              </div>
            </div>
            <div className=' md:w-2/3 pt-4 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                <Image
                  alt='vilanykely'
                  src='/assets/images/home/vilany kely.png'
                  width={100}
                  height={50}
                />
              </div>
              <div className='flex-grow text-left pl-3'>
                <h2
                  style={{ fontFamily: 'cormorant' }}
                  className='text-gray-900 text-lg pl-0 title-font font-medium '
                >
                  Mille Feuille de légume
                </h2>
                <p
                  style={{ fontFamily: 'Josefin_Sans' }}
                  className='leading-relaxed text-base'
                >
                  Candied Jerusalem artichokes.
                </p>
              </div>
            </div>
            <div className='flex flex-col  flex-wrap mt-9 lg:py-6 lg:text-left text-center'>
              <h1
                style={{ fontFamily: 'cormorsant' }}
                className='w-auto font-semibold text-2xl leading-none text-gray-800 -ml-12 md:ml-0 sm:text-8x'
              >
                Plats (20 000Ar)
              </h1>
              <div className=' md:w-2/3 pt-9 flex'>
                <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                  <Image
                    alt='vilanykely'
                    src='/assets/images/home/vilany kely.png'
                    width={100}
                    height={50}
                  />
                </div>
                <div className='flex-grow text-left pl-3'>
                  <h2
                    style={{ fontFamily: 'cormorant' }}
                    className='text-gray-900 text-lg pl-0 title-font font-medium '
                  >
                    Brochette du Rova
                  </h2>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='leading-relaxed text-base'
                  >
                    Candied Jerusalem artichokes.
                  </p>
                </div>
              </div>
              <div className=' md:w-2/3 pt-4 flex'>
                <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                  <Image
                    alt='vilanykely'
                    src='/assets/images/home/vilany kely.png'
                    width={100}
                    height={50}
                  />
                </div>
                <div className='flex-grow text-left pl-3'>
                  <h2
                    style={{ fontFamily: 'cormorant' }}
                    className='text-gray-900 text-lg pl-0 title-font font-medium '
                  >
                    Escalope du Poulet/Zebu
                  </h2>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='leading-relaxed text-base'
                  >
                    Candied Jerusalem artichokes.
                  </p>
                </div>
              </div>
              <div className=' md:w-2/3 pt-4 flex'>
                <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                  <Image
                    alt='vilanykely'
                    src='/assets/images/home/vilany kely.png'
                    width={100}
                    height={50}
                  />
                </div>
                <div className='flex-grow text-left pl-3'>
                  <h2
                    style={{ fontFamily: 'cormorant' }}
                    className='text-gray-900 text-lg pl-0 title-font font-medium '
                  >
                    Ratatouille du Betsileo
                  </h2>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='leading-relaxed text-base'
                  >
                    Candied Jerusalem artichokes.
                  </p>
                </div>
              </div>
              <div className=' md:w-2/3 py-4 flex'>
                <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                  <Image
                    alt='vilanykely'
                    src='/assets/images/home/vilany kely.png'
                    width={100}
                    height={50}
                  />
                </div>
                <div className='flex-grow text-left pl-3'>
                  <h2
                    style={{ fontFamily: 'cormorant' }}
                    className='text-gray-900 text-lg pl-0 title-font font-medium '
                  >
                    Vilany kely
                  </h2>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='leading-relaxed text-base'
                  >
                    Candied Jerusalem artichokes.
                  </p>
                </div>
              </div>

              <div className='flex flex-col pt-4 flex-wrap lg:py-6 -mb-10  lg:text-left text-center'>
                <h1
                  style={{ fontFamily: 'cormorsant' }}
                  className='w-auto font-semibold text-2xl leading-none text-gray-800  font-bebas-neue sm:text-8x'
                >
                  Desserts (14 000Ar)
                </h1>
                <div className=' md:w-2/3 pt-9 flex'>
                  <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                    <Image
                      alt='vilanykely'
                      src='/assets/images/home/vilany kely.png'
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className='flex-grow text-left pl-3'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 text-lg pl-0 title-font font-medium '
                    >
                      Brochette de fruit carameliser
                    </h2>
                    <p
                      style={{ fontFamily: 'Josefin_Sans' }}
                      className='leading-relaxed text-base'
                    >
                      Candied Jerusalem artichokes.
                    </p>
                  </div>
                </div>
                <div className=' md:w-2/3 pt-4 flex'>
                  <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                    <Image
                      alt='vilanykely'
                      src='/assets/images/home/vilany kely.png'
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className='flex-grow text-left pl-3'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 text-lg pl-0 title-font font-medium '
                    >
                      Fondant au chaucolat
                    </h2>
                    <p
                      style={{ fontFamily: 'Josefin_Sans' }}
                      className='leading-relaxed text-base'
                    >
                      Candied Jerusalem artichokes.
                    </p>
                  </div>
                </div>
                <div className=' md:w-2/3 pt-4 flex'>
                  <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0'>
                    <Image
                      alt='vilanykely'
                      src='/assets/images/home/vilany kely.png'
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className='flex-grow text-left pl-3'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 text-lg pl-0 title-font font-medium '
                    >
                      Nougat glacé
                    </h2>
                    <p
                      style={{ fontFamily: 'Josefin_Sans' }}
                      className='leading-relaxed text-base'
                    >
                      Candied Jerusalem artichokes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-gray-600 bg-slate-900 body-font'>
        <div className='container  mx-auto'>
          <div className=' mt-40 px-5 py-10  lg:mb-0 w-full  md:px-32 md:py-10'>
            <h3
              style={{ fontFamily: 'Josefin_Sans' }}
              className=' inline-block  px-6 py-1 uppercase text-white text-sm border-orange-300 border-y-2'
            >
              temoiyage
            </h3>

            <h1
              style={{ fontFamily: 'cormorant' }}
              className='w-auto font-black pt-3 text-3xl text-white leading-none  font-bebas-neue'
            >
              Avis de nos clients
            </h1>
            <p
              style={{ fontFamily: 'Josefin_Sans' }}
              className='py-3 text-white'
            >
              Nous adorons entendre nos clients, alors n'hésitez pas à laisser
              un commentaire ou à nous dire bonjour par e-mail.
            </p>
            <div className='container mx-auto'>
              <h1 className='text-3xl font-medium title-font text-gray-900 text-center'>
                Testimonials
              </h1>
              <div className='flex flex-wrap -m-4'>
                <div className='p-4 md:w-1/2 w-full'>
                  <div className='h-full bg-gray-800 p-8 rounded'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='block w-5 h-5  text-orange-300 mb-4'
                      viewBox='0 0 975.036 975.036'
                    >
                      <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                    </svg>
                    <Cardflex />
                    <p
                      style={{ fontFamily: 'cormorant' }}
                      className='leading-relaxed italic text-white border-t-2 py-3 '
                    >
                      Synth chartreuse iPhone lomo cray raw denim brunch
                      everyday carry neutra before they sold out fixie 90's
                      microdosing. Tacos pinterest fanny pack venmo, post-ironic
                      heirloom try-hard pabst authentic iceland.
                    </p>
                  </div>
                </div>
                <div className='p-4 md:w-1/2 w-full'>
                  <div className='h-full bg-gray-800 p-8 rounded'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='block w-5 h-5 text-orange-300 mb-4'
                      viewBox='0 0 975.036 975.036'
                    >
                      <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                    </svg>
                    <a className='inline-flex mb-6 items-center'>
                      <Image
                        alt='testimonial'
                        src='/assets/images/home/client2.png'
                        width={100}
                        height={50}
                        className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                      />
                      <span className='flex-grow flex flex-col pl-4'>
                        <span
                          style={{ fontFamily: 'cormorant' }}
                          className='title-font font-medium text-white'
                        >
                          Holden Caulfield
                        </span>
                        <span
                          style={{ fontFamily: 'Josefin_Sans' }}
                          className='text-orange-300 text-sm'
                        >
                          UI DEVELOPER
                        </span>
                      </span>
                    </a>
                    <p
                      style={{ fontFamily: 'cormorant' }}
                      className='leading-relaxed italic text-white border-t-2 py-3 '
                    >
                      Synth chartreuse iPhone lomo cray raw denim brunch
                      everyday carry neutra before they sold out fixie 90's
                      microdosing. Tacos pinterest fanny pack venmo, post-ironic
                      heirloom try-hard pabst authentic iceland.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                alt='testimonial'
                src='/assets/images/home/temoingage.png'
                width={500}
                height={100}
                className='w-full h-96 mt-10 flex-shrink-0 object-cover object-center'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container  px-5  py-24 mx-auto'>
          <div className='flex flex-col  items-center w-full mb-20'>
            <h3
              style={{ fontFamily: 'Josefin_Sans' }}
              className=' w-24 px-6 py-1  text-sm border-orange-300 border-y-2'
            >
              MENU
            </h3>
            <h1
              style={{ fontFamily: 'cormorant' }}
              className='w-auto font-semibold py-3 text-3xl leading-none  font-bebas-neue'
            >
              Plats populaires
            </h1>
            <p
              style={{ fontFamily: 'Josefin_Sans' }}
              className='lg:w-2/3 mx-auto text-center leading-relaxed text-base'
            >
              Explorez une délicieuse aventure culinaire avec nos plats
              populaires, soigneusement préparés pour éveiller vos papilles et
              satisfaire toutes vos envies gustatives.
            </p>
          </div>
          <div className='flex justify-center flex-wrap -m-4'>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full shadow-xl flex flex-col items-center text-center'>
                <Image
                  src='/assets/images/home/vilanykely.png'
                  width={500}
                  height={50}
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                />
                <div className='w-full'>
                  <div className='flex justify-between px-2 items-center'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='title-font font-medium text-lg text-gray-900'
                    >
                      Vilanay kely
                    </h2>
                    <h3
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 font-semibold'
                    >
                      Ar 20 000
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='mb-4 text-left p-2'
                  >
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full shadow-xl flex flex-col items-center text-center'>
                <Image
                  src='/assets/images/home/jus.png'
                  width={500}
                  height={50}
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                />
                <div className='w-full'>
                  <div className='flex justify-between px-2 items-center'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='title-font font-medium text-lg text-gray-900'
                    >
                      Coteils du rova
                    </h2>
                    <h3
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 font-semibold'
                    >
                      Ar 8 000
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='mb-4 text-left p-2'
                  >
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full shadow-xl flex flex-col items-center text-center'>
                <Image
                  src='/assets/images/home/henakisoa.png'
                  width={500}
                  height={50}
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                />
                <div className='w-full'>
                  <div className='flex justify-between px-2 items-center'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='title-font font-medium text-lg text-gray-900'
                    >
                      Hena Sôsy
                    </h2>
                    <h3
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 font-semibold'
                    >
                      Ar 20 000
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='mb-4 text-left p-2'
                  >
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full shadow-xl flex flex-col items-center text-center'>
                <Image
                  src='/assets/images/home/mosse.png'
                  width={500}
                  height={50}
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                />
                <div className='w-full'>
                  <div className='flex justify-between px-2 items-center'>
                    <h2
                      style={{ fontFamily: 'cormorant' }}
                      className='title-font font-medium text-lg text-gray-900'
                    >
                      Mousse au fruit
                    </h2>
                    <h3
                      style={{ fontFamily: 'cormorant' }}
                      className='text-gray-900 font-semibold '
                    >
                      Ar 20 000
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: 'Josefin_Sans' }}
                    className='mb-4 text-left p-2'
                  >
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <button className='inline-flex justify-around items-center border-2 border-orange-300 text-orange-300 py-3 w-52 px-7 focus:outline-none  text-base '>
              Voire Menu
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
                className='w-4 h-4 text-orange-300 block md:block'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
            {/* <a
              style={{ fontFamily: 'Josefin_Sans' }}
              href='#'
              className='px-4 py-3 uppercase text-orange-300 border-2 border-orange-300 dark:text-white  text-md'
            >
              Voire Menu
            </a> */}
          </div>
        </div>
      </section>

      <section className='text-gray-600 bg-slate-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex items-center md:flex-row flex-col'>
          <div className=' mb-10 lg:mb-0 rounded-lg overflow-hidden '>
            <h3
              style={{ fontFamily: 'Josefin_Sans' }}
              className=' inline-block px-6 py-1 text-white uppercase text-sm border-orange-300 border-y-2'
            >
              Ce que nous offrons.
            </h3>
            <h1
              style={{ fontFamily: 'cormorant' }}
              className='w-auto font-black text-white pt-3 text-3xl leading-none   font-bebas-neue'
            >
              Nos excellents services
            </h1>
            <div className='w-96'>
              <p
                style={{ fontFamily: 'Josefin_Sans' }}
                className='py-3 text-white'
              >
                Découvrez l'excellence avec nos services exceptionnels qui
                répondent à vos besoins de manière exceptionnelle. Nous nous
                engageons à vous offrir une expérience client inégalée.
              </p>
            </div>
            {/* <img alt='feature' class='object-cover object-center h-full w-full' src='https://dummyimage.com/460x500'> */}
          </div>
          <div className=' flex gap-6 md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4'>
            <div className='border-8 py-12 border-gray-800 text-center  items-center'>
              <div className='flex  justify-center'>
                <Image
                  alt='icon'
                  src='/assets/images/icons/Icon2.png'
                  width={40}
                  height={20}
                />
              </div>
              <span className='ml-4 flex px-8 justify-center pt-5 flex-col leading-none'>
                <span
                  style={{ fontFamily: 'cormorant' }}
                  className='title-font text-white font-medium'
                >
                  Opened 10/7
                </span>
              </span>
            </div>
            <div className='border-8 py-12 border-gray-800 text-center  items-center'>
              <div className='flex  justify-center'>
                <Image
                  alt='icone'
                  src='/assets/images/icons/Icon.png'
                  width={40}
                  height={20}
                />
              </div>
              <span className='ml-4 flex px-8 justify-center pt-5 flex-col leading-none'>
                <span
                  style={{ fontFamily: 'cormorant' }}
                  className='title-font text-white font-medium'
                >
                  Menus Special
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className='relative'>
        <Image
          src='/assets/images/home/Background.png'
          alt='tena hita ve le sary'
          width={500}
          height={100}
          className='absolute inset-0  w-full h-full'
        />
        <div className='relative bg-gray-900 bg-opacity-75'>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-7xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col items-center justify-center xl:flex-row'>
              <div className=' max-w-xl xl:px-8 xl:w-screen'>
                <div className='bg-gray-900 bg-opacity-75 rounded  shadow-2xl p-7 sm:p-10'>
                  <div className=' text-center'>
                    <BottonWithBorder title={title} />
                    <h1
                      style={{ fontFamily: 'cormorant' }}
                      className='w-auto font-black text-white py-3 text-xl leading-none   font-bebas-neue'
                    >
                      Réservez votre table dès maintenant
                    </h1>
                  </div>
                  <form className='pt-5'>
                    <div className='mb-1 md:grid md:grid-cols-2 gap-5 sm:mb-2'>
                      <input
                        style={{ fontFamily: 'Josefin_Sans' }}
                        placeholder='Nom'
                        required
                        type='text'
                        className='flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                      <input
                        style={{ fontFamily: 'Josefin_Sans' }}
                        placeholder='Email'
                        required
                        type='text'
                        className='flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                    </div>
                    <div className='mb-1 md:grid md:grid-cols-3 gap-5 sm:mb-2'>
                      <input
                        style={{ fontFamily: 'Josefin_Sans' }}
                        placeholder='Prenom'
                        required
                        type='text'
                        className='flex-grow  h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                      <input
                        style={{ fontFamily: 'Josefin_Sans' }}
                        placeholder='Heurs'
                        required
                        type='time'
                        className='flex-grow  h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                      <input
                        style={{ fontFamily: 'Josefin_Sans' }}
                        placeholder='Date'
                        required
                        type='date'
                        className='flex-grow text-gray-800 h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                        id='firstName'
                        name='firstName'
                      />
                    </div>
                    <div className='mt-10  text-center'>
                      <button className='inline-flex justify-around items-center border-2 border-orange-300 text-orange-300 py-3 w-52 px-7 focus:outline-none  text-base '>
                        Réserver la table
                        <svg
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 10'
                          className='w-4 h-4 text-orange-300 block md:block'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 5h12m0 0L9 1m4 4L9 9'
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
