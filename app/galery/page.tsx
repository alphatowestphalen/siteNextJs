"use client";
import React, { useState } from "react";
import BottonWithBorder from "../component/Botton/BottonWithBorder/BottonWithBorder";
import Image from "next/image";
const GaleryPage = () => {
  const [galery, setGalery] = useState<string>("Galerie");
  return (
    <>
      <div className="bg-gray-900 flex justify-center py-8 md:text-xl">
        <BottonWithBorder title={galery} />
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="md:grid gap-4  sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/Image(8).png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Marta Clermont
                </p>
                <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Amet I love liquorice jujubes pudding croissant I love
                  pudding.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/Image(9).png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Anthony Geek
                </p>
                <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Apple pie macaroon toffee jujubes pie tart cookie caramels.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/Photo(1).png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Alice Melbourne
                </p>
                <p className="mb-4 text-xs text-gray-100">Human Resources</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Lorizzle ipsum bling bling sit amizzle, consectetuer
                  adipiscing elit.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/Image(13).png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Martin Garix
                </p>
                <p className="mb-4 text-xs text-gray-100">Good guy</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                  flank.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/2.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Andrew Larkin
                </p>
                <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Moonfish, steelhead, lamprey southern flounder tadpole fish
                  bigeye.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 p-5 md:p-0">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/assets/images/galerie/Image(16).png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Sophie Denmo
                </p>
                <p className="mb-4 text-xs text-gray-100">Designer</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Veggies sunt bona vobis, proinde vos postulo esse magis grape
                  pea.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 pt-10 flex justify-center">
            <a
              style={{ fontFamily: "Josefin_Sans" }}
              href="#"
              className="px-10 py-3  bg-transparent border border-orange-300 text-orange-300 text-md"
            >
              {`Voire Menus`}
            </a>
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <img
          className="object-cover w-full h-96 md:h-64 xl:h-80"
          src="/assets/images/galerie/Image(10).png"
          alt="Person"
        />
        <div className="absolute top-12 left-6 md:top-4 md:left-16 ">
          <h3
            style={{ fontFamily: "Josefin_Sans" }}
            className=" inline-block px-6 py-1  text-sm md:text-lg border-orange-300 border-y-2"
          >
            {`RESERVATION`}
          </h3>
          <div className="w-96">
            <h1
              style={{ fontFamily: "cormorant" }}
              className="md:w-[500px]  font-black pt-3  text-3xl md:text-5xl leading-10  font-bebas-neue"
            >
              {`Cette soirée sera formidable !`}
            </h1>
            <p
              style={{ fontFamily: "Josefin_Sans" }}
              className="py-5 w-full pr-5"
            >
              {`Cette soirée promet d'être exceptionnelle, emplie de moments mémorables et d'une ambiance tout à fait formidable !`}
              <br />
            </p>
            <a
              style={{ fontFamily: "Josefin_Sans" }}
              href="#"
              className="px-8 py-3  bg-transparent border border-orange-300 text-orange-300 text-md"
            >
              {`Voire Plus`}
            </a>
          </div>
        </div>
      </div>

      <section className="text-gray-600 pb-5 md:pb-0 md:mb-0 body-font overflow-hidden">
        <div className="container px-5  md:pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 py-1 uppercase text-md md:text-lg border-orange-300 border-y-2"
              >
                {`Caractéristique`}
              </h3>
              <div className="w-96">
                <h1
                  style={{ fontFamily: "cormorant" }}
                  className="md:w-[500px]  font-black py-8  text-3xl md:text-3xl leading-snug  font-bebas-neue"
                >
                  {`Des ingrédients`}
                  <br />
                  {`Toujours frais`}
                </h1>
                <p
                  style={{ fontFamily: "Josefin_Sans" }}
                  className="pb-8 w-full pr-5"
                >
                  {`Les gens, la cuisine et les emplacements de choix font de Rodich l'endroit parfait pour que de bons amis et la famille se réunissent et passent un bon moment.`}
                </p>
                <a
                  style={{ fontFamily: "Josefin_Sans" }}
                  href="#"
                  className="px-8 py-3   bg-transparent border border-orange-300 text-orange-300 text-md"
                >
                  {`Voir le menu`}
                </a>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full mt-6 md:mt-0 rounded-b-lg md:rounded-none md:pt-0 lg:h-auto h-64 object-cover object-center"
              src="/assets/images/galerie/Image(18).png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden pb-52">
        <div className="container px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto rounded-t-lg md:rounded-none h-64 object-cover object-center"
              src="/assets/images/galerie/image(19).png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 my-5 uppercase text-md font-black md:text-lg border-orange-300 border-y-2"
              >
                {`Caractéristique`}
              </h3>
              <div className="w-96">
                <h1
                  style={{ fontFamily: "cormorant" }}
                  className="md:w-[500px] pb-5 font-black  text-3xl leading-snug  font-bebas-neue"
                >
                  {`Nous vous invitons`}
                  <br />
                  {`à visiter notre restaurant`}
                </h1>
                <p
                  style={{ fontFamily: "Josefin_Sans" }}
                  className="pb-8 w-full pr-5"
                >
                  {`Chaque fois que vous dînez parfaitement avec nous, cela devrait être une expérience joyeuse, avec une cuisine inspirée et un environnement conçu avec des touches individuelles uniques à la région locale.`}
                </p>
                <a
                  style={{ fontFamily: "Josefin_Sans" }}
                  href="#"
                  className="px-8 py-3   bg-transparent border border-orange-300 text-orange-300 text-md"
                >
                  {`Voir le menu`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GaleryPage;
