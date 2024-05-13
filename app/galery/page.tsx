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
                <h1 className="mb-1 text-4xl font-bold text-gray-100">
                 Nougga galacer
                </h1>
                <p className="mb-4 text-xl text-gray-100">Dessert</p>
                           
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
                <h1 className="mb-1 text-4xl font-bold text-gray-100">
                  Steck Pannier
                </h1>
                <p className="mb-4 text-xl text-gray-100">Plat</p>
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
                <p className="mb-1 text-4xl font-bold text-gray-100">
                  Steck out
                </p>
                <p className="mb-4 text-xl text-gray-100">Plat</p>
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
                <p className="mb-1 text-4xl font-bold text-gray-100">
                  Salade Garnie 
                </p>
                <p className="mb-4 text-xl text-gray-100">Entrer</p>
                
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
                <p className="mb-1 text-4xl font-bold text-gray-100">
                  Brochette du Rova
                </p>
                <p className="mb-4 text-xl text-gray-100">Plat</p>
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
                <p className="mb-1 text-4xl font-bold text-gray-100">
                  Brochette du Rova 
                </p>
                <p className="mb-4 text-xl text-gray-100">Plat</p>
                
                
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
        <div className="absolute top-12 left-8 md:top-4 md:left-20 ">
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
