"use client";
import React, { useState } from "react";
import BottonWithBorder from "../component/Botton/BottonWithBorder/BottonWithBorder";
import Image from "next/image";

const AboutPage: React.FC = () => {
  const [about, setAbout] = useState<string>("A propos");
  const [save, setSave] = useState<string>("Reservation");
  return (
    <>
      <div className="bg-gray-900 flex justify-center py-8 md:text-xl">
        <BottonWithBorder title={about} />
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 py-1  text-sm md:text-lg border-orange-300 border-y-2"
              >
                {`A propos de Nous`}
              </h3>
              <div className="w-96">
                <h1
                  style={{ fontFamily: "cormorant" }}
                  className="w-auto font-black pt-3 md:text-3xl leading-none text-gray-700  font-bebas-neue"
                >
                  {`Qualité et Tradition`}
                </h1>
                <p
                  style={{ fontFamily: "Josefin_Sans" }}
                  className="py-5 w-full pr-5"
                >
                  {`Une fusion parfaite entre la qualité intemporelle et la richesse de la tradition, notre engagement à vous offrir des produits et services d'exception.`}
                  <br />
                </p>
                <p className="title-font py-9 md:pb-28">{`RAMAMPY Vicky Annah`}</p>
                <a
                  style={{ fontFamily: "Josefin_Sans" }}
                  href="#"
                  className="px-8 py-3  bg-transparent border border-orange-300 text-orange-300 text-md"
                >
                  {`Voire Plus`}
                </a>
              </div>
              <div className="p-4 md:w-80 md:-mt-32 mt-8  md:ml-80 relative bg-white shadow-md ">
                <div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-4 flex-shrink-0">
                      <Image
                        alt="location"
                        src="/assets/images/icons/Location.png"
                        width={25}
                        height={20}
                      />
                    </div>
                    <div
                      style={{ fontFamily: "Josefin_Sans" }}
                      className="flex-grow pl-6"
                    >
                      <h2 className="text-gray-900 text-lg leading-3 title-font font-semibold mb-2">
                        {`RAMAMPY Vicky Annah`}
                      </h2>
                      <p className="leading-relaxed text-base">{`Gérante`}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Josefin_Sans" }}>
                      {`Tirer parti des opportunités évidentes pour identifier une
                      fourchette de chiffres.`}
                    </p>
                    <div className="flex gap-2 my-2">
                      <svg
                        className="w-[20px] h-[25px] text-orange-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[20px] h-[25px] text-orange-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[20px] h-[25px] text-orange-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[20px] h-[25px] text-orange-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[20px] h-[25px] text-orange-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              alt="ecommerce"
              width={400}
              height={100}
              className="lg:w-1/2 w-full lg:h-96 h-40 object-cover object-center rounded-tr-3xl"
              src="/assets/images/about/Image.png"
            />
          </div>
        </div>
      </section>

      <div className="relative">
        <Image
          src="/assets/images/about/Background.png"
          alt="tena hita ve le sary"
          width={500}
          height={100}
          className="absolute inset-0  w-full h-full"
        />
        <div className="text-gray-600 relative body-font">
          <div className="container  py-20 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    src="/assets/images/about/Icon(1).png"
                    alt="tena hita ve le sary"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="flex-grow">
                  <h2
                    style={{ fontFamily: "cormorant" }}
                    className="text-white  text-lg title-font font-semibold mb-3"
                  >
                    {`Produit Frais`}
                  </h2>
                  <p
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="leading-relaxed text-white text-base"
                  >
                    {`"Les professionnels considèrent les problèmes de chacun avec
                    une approche conviviale et axée sur des domaines restreints.`}
                  </p>
                  <a
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="mt-3 text-orange-300 inline-flex items-center"
                  >
                    En voir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    src="/assets/images/about/Icon(2).png"
                    alt="tena hita ve le sary"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="flex-grow">
                  <h2
                    style={{ fontFamily: "cormorant" }}
                    className="text-white text-lg title-font font-semibold mb-3"
                  >
                    {`Chefs qualifiés`}
                  </h2>
                  <p
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="leading-relaxed text-white text-base"
                  >
                    {`Professionnel, attentionné, pour tout le monde. Des problèmes insignifiants, convivialité de niche.`}
                  </p>
                  <a
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="mt-3 text-orange-300 inline-flex items-center"
                  >
                    En voir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    src="/assets/images/about/Icon(3).png"
                    alt="tena hita ve le sary"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="flex-grow">
                  <h2
                    style={{ fontFamily: "cormorant" }}
                    className="text-white text-lg title-font font-semibold mb-3"
                  >
                    {`Drinks & Juices`}
                  </h2>
                  <p
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="leading-relaxed text-white text-base"
                  >
                    {`Professional consider everyone probls small niche friendly.`}
                  </p>
                  <a
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="mt-3 text-orange-300 inline-flex items-center"
                  >
                    En voir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
                  <Image
                    src="/assets/images/about/Icon(4).png"
                    alt="tena hita ve le sary"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="flex-grow">
                  <h2
                    style={{ fontFamily: "cormorant" }}
                    className="text-white text-lg title-font font-semibold mb-3"
                  >
                    {`Vegan Cuisine`}
                  </h2>
                  <p
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="leading-relaxed text-white text-base"
                  >
                    {`Professional consider everyone probls small niche friendly.`}
                  </p>
                  <a
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="mt-3 text-orange-300 inline-flex items-center"
                  >
                    En voir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 py-16 body-font">
        <div className="flex flex-col  items-center w-full ">
          <h3
            style={{ fontFamily: "Josefin_Sans" }}
            className=" inline-block px-6 py-1   text-sm md:text-lg uppercase border-orange-300 border-y-2"
          >
            {`Équipes`}
          </h3>
          <h1
            style={{ fontFamily: "cormorant" }}
            className="w-auto py-5 font-semibold md:text-3xl leading-none  font-bebas-neue"
          >
            {`Rencontrez nos équipes professionnels`}
          </h1>
        </div>
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap mx-4 gap-9 -mb-10 justify-center  text-center">
            <div className="sm:w-1/4 mb-10 shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden ">
                <Image
                  width={500}
                  height={1000}
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/assets/images/about/Anna"
                />
              </div>
              <h2
                style={{ fontFamily: "cormorant" }}
                className="title-font text-xl font-medium text-gray-900 mt-6 "
              >
                {`Annah`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >{`Gérant`}</p>
            </div>
            <div className="sm:w-1/4 mb-10 pb-5 shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/assets/images/about/befy.png"
                  width={500}
                  height={50}
                />
              </div>
              <h2
                style={{ fontFamily: "cormorant" }}
                className="title-font text-2xl font-medium text-gray-900 mt-6 mb-1"
              >
                {`Florantin`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Chef Cuisinier`}
              </p>
            </div>
            <div className="sm:w-1/4 mb-10 shadow-lg">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/assets/images/about/tsila.png"
                  width={500}
                  height={50}
                />
              </div>
              <h2
                style={{ fontFamily: "cormorant" }}
                className="title-font text-2xl font-medium text-gray-900 mt-6 mb-1"
              >
                {`JOSEPH`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Serveur Barman`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white text-center py-16">
        <div className="flex flex-col  items-center w-full ">
          <h3
            style={{ fontFamily: "Josefin_Sans" }}
            className=" inline-block px-6 py-1   text-sm md:text-lg uppercase border-orange-300 border-y-2"
          >
            {`Testimonial`}
          </h3>
          <h1
            style={{ fontFamily: "cormorant" }}
            className="w-auto py-5 font-semibold md:text-3xl leading-none  font-bebas-neue"
          >
            {`Ce que disent nos clients`}
          </h1>
        </div>
        <div className="flex justify-center">
          <Image
            width={30}
            height={10}
            alt="content"
            className="object-cover object-center"
            src="/assets/images/about/cote.png"
          />
        </div>
        <div className="flex justify-center py-10 ">
          <div className="flex items-center w-4/5">
            <svg
              className="w-10 h-14 text-orange-300 mx-10 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
            <p className="font-medium text-sm italic">
            {`Très belle surprise sur les marches de la vieille ville de Fiana. Je vous recommande les brochettes de zébu sauce vin rouge. Un régal 🥰. Le tout servi avec sourire et bonne humeur. Nous reviendrons. 🇲🇺🇫🇷🇲🇬 Service Repas sur place Type de repas Dîner Cuisine : 5 Service : 5 Ambiance : 5`}
            </p>
            <svg
              className="w-10 h-14 text-orange-300 mx-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
        <div>
          <a className="mb-6  flex-grow flex flex-col w-screen  items-center">
            <Image
              alt="testimonial"
              src="/assets/images/home/client1.png"
              width={500}
              height={100}
              className="w-24 h-24 my-5 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
              <span
                style={{ fontFamily: "cormorant" }}
                className="title-font font-medium text-white"
              >
                {`Alexandre Mottier`}
              </span>
              <span
                style={{ fontFamily: "Josefin_Sans" }}
                className="text-orange-300 text-sm"
              >
                {`4 avis`}
              </span>
            </span>
          </a>
        </div>
      </section>

      <div className="relative">
        <Image
          src="/assets/images/home/Background.png"
          alt="tena hita ve le sary"
          width={500}
          height={100}
          className="absolute inset-0  w-full h-full"
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-7xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className=" max-w-xl xl:px-8 xl:w-screen">
                <div className="bg-gray-900 bg-opacity-75 rounded  shadow-2xl p-7 sm:p-10">
                  <div className=" text-center">
                    <BottonWithBorder title={save} />
                    <h1
                      style={{ fontFamily: "cormorant" }}
                      className="w-auto font-black text-white py-3 text-xl leading-none   font-bebas-neue"
                    >
                      {`Réservez votre table dès maintenant`}
                    </h1>
                  </div>
                  <form className="pt-5">
                    <div className="mb-1 md:grid md:grid-cols-2 gap-5 sm:mb-2">
                      <input
                        style={{ fontFamily: "Josefin_Sans" }}
                        placeholder="Nom"
                        required
                        type="text"
                        className="flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                      <input
                        style={{ fontFamily: "Josefin_Sans" }}
                        placeholder="Email"
                        required
                        type="text"
                        className="flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 md:grid md:grid-cols-3 gap-5 sm:mb-2">
                      <input
                        style={{ fontFamily: "Josefin_Sans" }}
                        placeholder="Prenom"
                        required
                        type="text"
                        className="flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                      <input
                        style={{ fontFamily: "Josefin_Sans" }}
                        placeholder="Heurs"
                        required
                        type="time"
                        className="flex-grow w-full h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                      <input
                        style={{ fontFamily: "Josefin_Sans" }}
                        placeholder="Date"
                        required
                        type="date"
                        className="flex-grow w-full text-gray-800 h-11 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mt-10  text-center">
                      <button className="inline-flex justify-around items-center border-2 border-orange-300 text-orange-300 py-3 w-52 px-7 focus:outline-none  text-base ">
                        {`Réserver la table`}
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                          className="w-4 h-4 text-orange-300 block md:block"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
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

export default AboutPage;
