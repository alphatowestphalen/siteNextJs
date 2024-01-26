import React from "react";

const Contactpage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex px-5 py-24  md:flex-row flex-col justify-around items-center">
          <div className="lg:flex-grow md:w-1/6   md:pr-16 inline-block flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              style={{ fontFamily: "cormorant" }}
              className="md:w-[500px]  font-black py-3  text-xl md:text-xl leading-snug  font-bebas-neue"
            >
              {`Réservéz votre table `}
              {`dès maintenant`}
            </h1>
            <p
              style={{ fontFamily: "Josefin_Sans" }}
              className="pb-5 w-1/2 text-md pr-5"
            >
              {`Amener la table à la victoire, mettre en place des stratégies de survie gagnant-gagnant, assurer une domination proactive jusqu'à la fin de la journée, en exploitant les moments réels à travers des points de contact multiples.`}
            </p>
            <div className="">
              <div className="flex items-center gap-3">
                <img src="/assets/images/icons/Location.png" className="w-9 p-1 rounded-full bg-slate-900" alt="" />
                <span>{`IR 19, Ville Haute Fianarantsoa`}</span>
              </div>
              <div className="flex items-center py-4 gap-3">
                <img className="w-9 p-1 rounded-full bg-slate-900" src="/assets/images/icons/Vector.png" alt="" />
                <span>{`latabledurova@gmail.com`}</span>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-9 p-1 rounded-full bg-slate-900" src="/assets/images/icons/Call.png" alt="" />
                <span>{`+261 72 545 75`}</span>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
            <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 py-1 uppercase text-md md:text-lg border-orange-300 border-y-2"
              >
                {`Notre email `}
              </h3>
              <div className="w-96">
                <h1
                  style={{ fontFamily: "cormorant" }}
                  className="md:w-[500px]  font-black py-3  text-xl md:text-xl leading-snug  font-bebas-neue"
                >
                  {`Vous avez des question`}
                  
                </h1>
                
                <div className="grid pb-8 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Nom"
                    className="w-full md:w-48  border  text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="email"
                    id="footer-field"
                    name="footer-field"
                    placeholder="test@example.com"
                    className="w-full md:w-48 bg-transparent border text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="Telephone"
                    id="footer-field"
                    name="footer-field"
                    placeholder="+261 34 00 000 00 "
                    className="w-full md:w-48 bg-transparent border text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Subject"
                    className="w-full md:w-48 bg-transparent border text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <textarea className="col-span-2 border-gray-600 p-3  border" name="" id="" cols={60} rows={5} placeholder="Message">
                    
                  </textarea>
                </div>
                <a
                  style={{ fontFamily: "Josefin_Sans" }}
                  href="#"
                  className="px-8 py-3   bg-transparent border border-orange-300 text-orange-300 text-md"
                >
                  {`Envoyer`}
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactpage;
