"use client";
import React, { useState } from "react";
import BottonWithBorder from "../component/Botton/BottonWithBorder/BottonWithBorder";
import Image from "next/image";

const page = () => {
  const [title, setTitle] = useState<string>("Menu");
  return (
    <>
      <div className="bg-gray-900 flex justify-center py-8 md:text-xl">
        <BottonWithBorder title={title} />
      </div>
      <section className="text-gray-600 py-5 md:py-24 px-5 md:gap-40 flex flex-wrap  justify-center body-font">
        <Image
          width={500}
          height={10}
          alt="ecommerce"
          className=" md:w-[500px] h-96 py-5 object-cover"
          src="/assets/images/menu/plats.png"
        />
        {/* <img alt='feature' class='object-cover object-center h-full w-full' src='https://dummyimage.com/460x500'> */}
        <div className="lg:w-1/3 ">
          <h1
            style={{ fontFamily: "cormorsant" }}
            className="w-auto font-semibold text-2xl items-center pb-5  leading-none text-gray-800  font-bebas-neue sm:text-8x"
          >
            {`Entree (15 000Ar)`}
          </h1>
          <div className=" md:w-2/3 md:pt-4 flex ">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg  title-font font-medium "
              >
                {`Salady Malagasy`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-5 text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 md:pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Assiette du chef`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 md:pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Tartare du rova`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 md:pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Mille Feuille de légume`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" hidden sm:block py-8">
        <Image
          width={500}
          height={100}
          alt="ecommerce"
          className="lg:w-auto  w-96 h-80  object-cover"
          src="/assets/images/menu/Image(4).png"
        />
      </section>

      <section className="text-gray-600 py-5 md:py-24 px-5 md:gap-40 flex flex-wrap  justify-center body-font">
        {/* <img alt='feature' class='object-cover object-center h-full w-full' src='https://dummyimage.com/460x500'> */}
        <div className="lg:w-1/3 lg:text-left text-center">
          <h1
            style={{ fontFamily: "cormorsant" }}
            className="w-auto font-semibold text-2xl items-center pb-5  leading-none text-gray-800  font-bebas-neue sm:text-8x"
          >
            {`Plats (20 000Ar)`}
          </h1>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg  title-font font-medium "
              >
                {`Salady Malagasy`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-5 text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Assiette du chef`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Tartare du rova`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Mille Feuille de légume`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
        </div>
        <Image
          width={500}
          height={10}
          alt="ecommerce"
          className=" md:w-[500px] h-96  object-cover"
          src="/assets/images/menu/plats.png"
        />
      </section>

      <section className=" hidden sm:block py-8">
        <Image
          width={500}
          height={100}
          alt="ecommerce"
          className="lg:w-auto  w-96 h-80  object-cover"
          src="/assets/images/menu/Image(6).png"
        />
      </section>

      <section className="text-gray-600 py-5 md:py-24 px-5 md:gap-40 flex flex-wrap  justify-center body-font">
        <Image
          width={500}
          height={10}
          alt="ecommerce"
          className=" md:w-[500px] py-5 h-96  object-cover"
          src="/assets/images/menu/plats.png"
        />
        {/* <img alt='feature' class='object-cover object-center h-full w-full' src='https://dummyimage.com/460x500'> */}
        <div className="lg:w-1/3 ">
          <h1
            style={{ fontFamily: "cormorsant" }}
            className="w-auto font-semibold text-2xl items-center pb-5  leading-none text-gray-800  font-bebas-neue sm:text-8x"
          >
            {`Desert (15 000Ar)`}
          </h1>
          <div className=" md:w-2/3 pt-4 flex ">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg  title-font font-medium "
              >
                {`Salady Malagasy`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-5 text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Assiette du chef`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Tartare du rova`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
          <div className=" md:w-2/3 pt-4 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-white mb-6 flex-shrink-0">
              <Image
                alt="vilanykely"
                src="/assets/images/home/vilany kely.png"
                width={100}
                height={50}
              />
            </div>
            <div className="flex-grow text-left pl-3">
              <h2
                style={{ fontFamily: "cormorant" }}
                className="text-gray-900 text-lg pl-0 title-font font-medium "
              >
                {`Mille Feuille de légume`}
              </h2>
              <p
                style={{ fontFamily: "Josefin_Sans" }}
                className="leading-relaxed text-base"
              >
                {`Candied Jerusalem artichokes.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
