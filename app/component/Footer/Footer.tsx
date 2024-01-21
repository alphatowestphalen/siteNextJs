import React from "react";
const Footer = () => {
  return (
    <footer className="text-gray-600 bg-slate-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-between gap-7 md:text-left text-center order-first">
          <div className="lg:w-1/4  md:w-1/4 w-full px-4">
            <h3
              style={{ fontFamily: "Josefin_Sans" }}
              className=" inline-block px-6 py-1  text-white uppercase text-base  border-orange-300 border-y-2"
            >
              {`Reservation`}
            </h3>
            <nav className="list-none md:mb-10">
              <li>
                <p
                  style={{ fontFamily: "cormorant" }}
                  className="w-auto  text-white md:py-3 text-base leading-8   font-bebas-neue"
                >
                  {`IR 19, Ville Haute Fianarantsoa`} <br />
                  <span className="text-orange-300"> Appel </span>
                  <a href="tel:+261 72 545 75">
                    +261 72 545 75
                  </a>
                  <br />
                  <span className="text-orange-300">
                    <a href="mailto:latabledurova@gmail.com">
                      {`latabledurova@gmail.com`}
                    </a>
                  </span>
                </p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2  w-full">
            <div className="flex xl:flex-nowrap md:flex-nowrap  lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-auto  lg:mr-0 sm:mr-4">
                <p
                  style={{ fontFamily: "cormorant" }}
                  className="text-white text-sm md:text-left text-center"
                >
                  {`Rejoignez notre liste de diffusion pour les mises à
                  jour,Recevez des actualités, des offres et des événements.`}
                  {/* <br className='lg:block hidden'>waistcoat green juice */}
                </p>
                <div className="flex pt-5">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full md:w-48 bg-transparent border-x-2 border-y-2 border-white px-2 focus:ring-indigo-200 text-base outline-none text-white  leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="lg:mt-2 xl:mt-0 w-32 flex-shrink-0 h-12 text-gray-900 bg-white border-0  px-6 focus:outline-none"
                  >
                    {`Envoyer`}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/4 w-full py-5 px-4">
            <h3
              style={{ fontFamily: "Josefin_Sans" }}
              className=" inline-block px-6 py-1  text-white uppercase text-base  border-orange-300 border-y-2"
            >
              {`heurs ouverture`}
            </h3>
            <nav className="list-none mb-10">
              <li>
                <p
                  style={{ fontFamily: "cormorant" }}
                  className="w-auto  text-white py-3 text-base leading-8   font-bebas-neue"
                >
                  <span className="text-orange-300"> {`7jours / 7`} </span>:{" "}
                  {`9.00 Am –
                  9.00 Pm`}
                </p>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
