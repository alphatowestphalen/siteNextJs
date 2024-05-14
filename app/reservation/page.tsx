"use client";
import React, { useState } from "react";
import BottonWithBorder from "../component/Botton/BottonWithBorder/BottonWithBorder";
import { SendEmail } from "../email/SendEmail";
const PageReservation = () => {
  const [reservation, setResrvations] = useState<string>("Reservation");
  const [emailSent, setEmailSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmial] = useState("");
  const [number, setNumber] = useState("");
  const [dateReservation, setDateReservation] = useState("");
  const [hourse, setHourse] = useState("");
  const [message, setMessage] = useState("");
  const [personnes, setPersonnes] = useState("");

  const handleSendEmail = async () => {
    const serviceID = "service_latable";
    const templateID = "template_latable";
    const userID = "lZy9CmEIkA-0-ygMh";

    const templateParams = {
      from_name: name,
      from_email: email,
      name: name,
      email: email,
      number: number,
      dateReservation: dateReservation,
      hours: hourse,
      message: message,
    };

    try {
      await SendEmail(serviceID, templateID, userID, templateParams);
      setEmailSent(true);
    } catch (error) {
      // Gérer les erreurs d'envoi d'e-mail
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSendEmail();
  };

  return (
    <>
      <div className="bg-gray-900 flex justify-center py-8 md:text-xl">
        <BottonWithBorder title={reservation} />
      </div>
      <section className="text-gray-600 pb-5 md:pb-0 md:mb-12 body-font overflow-hidden">
        <div className="container px-5  md:pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto pb-5 flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 py-1 uppercase text-md md:text-lg border-orange-300 border-y-2"
              >
                {`Reseravtion`}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="w-96">
                  <h1
                    style={{ fontFamily: "cormorant" }}
                    className="md:w-[500px]  font-black py-3  text-xl md:text-xl leading-snug  font-bebas-neue"
                  >
                    {`Réservéz votre table `}
                    {`dès maintenant`}
                  </h1>
                  <p
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="pb-5 w-full text-md pr-5"
                  >
                    {`Les gens, la cuisine et les emplacements de choix font de Rodich l'endroit parfait pour que de bons amis et la famille se réunissent et passent un bon moment.`}
                  </p>
                  <div className="grid pb-8 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="">
                        Votre Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="footer-field"
                        name="name"
                        placeholder="Nom"
                        className="w-full md:w-48  border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div>
                      <label htmlFor="">
                        Votre adresse Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmial(e.target.value)}
                        id="footer-field"
                        name="email"
                        placeholder="test@example.com"
                        className="w-full md:w-48 bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Votre numero Tel </label>
                      <input
                        type="Telephone"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        id="footer-field"
                        name="number"
                        placeholder="+261 34 00 000 00 "
                        className="w-full md:w-48 bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Nombre de  Personne </label>
                      <input 
                        type="text"
                        value={personnes}
                        onChange={(e) => setPersonnes(e.target.value)}
                        id="footer-field"
                        name="personnes"
                        placeholder="12 personnes "
                        className="w-full md:w-48 bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Date Arrivées</label>
                      <input
                        type="date"
                        value={dateReservation}
                        onChange={(e) => setDateReservation(e.target.value)}
                        id="footer-field"
                        name="dateReservation"
                        placeholder="11/11/2024"
                        className="w-full md:w-48 bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Heurs</label>
                      <input
                        type="time"
                        value={hourse}
                        onChange={(e) => setHourse(e.target.value)}
                        id="footer-field"
                        name="hourse"
                        placeholder="12:00"
                        className="w-full md:w-48 bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1  leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full mb-6  md:w-[397px] bg-transparent border-2 text-gray-600 border-gray-600 px-3 focus:ring-indigo-200 text-base outline-none py-1   leading-8 transition-colors duration-200 ease-in-out"
                    name="message"
                  ></textarea>
                  <button
                    type="submit"
                    style={{ fontFamily: "Josefin_Sans" }}
                    className="w-full md:w-[218px] px-8 py-3   bg-transparent border border-orange-300 text-orange-300 text-md"
                  >
                    {`Reserver une Table`}
                  </button>
                </div>
              </form>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full md:h-[465px] mt-6 md:mt-0 rounded-b-lg md:rounded-none md:pt-0 lg:h-auto object-cover object-center"
              src="/assets/images/reservation/Image(19).png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 pb-5 md:pb-0 md:mb-12 body-font overflow-hidden">
        <div className="container px-5  md:pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto pb-5 flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full mt-6 md:mt-0 rounded-b-lg md:rounded-none md:pt-0 lg:h-auto h-64 object-cover object-center"
              src="/assets/images/reservation/Image(20).png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
              <h3
                style={{ fontFamily: "Josefin_Sans" }}
                className=" inline-block px-6 py-1 uppercase text-md md:text-lg border-orange-300 border-y-2"
              >
                {` POURQUOI NOUS CHOISIR`}
              </h3>
              <div className="w-96">
                <h1
                  style={{ fontFamily: "cormorant" }}
                  className="md:w-[500px]  font-black py-3  text-xl md:text-xl leading-snug  font-bebas-neue"
                >
                  {`Pourquoi somme-nous les meilleurs ?`}
                </h1>
                <p
                  style={{ fontFamily: "Josefin_Sans" }}
                  className=" w-full text-sm  pb-5"
                >
                  {`Nous sommes les meilleurs parce que La Table du Rova incarne l'essence même de l'excellence culinaire et de l'hospitalité. Notre engagement envers la qualité, la créativité et l'authenticité fait de chaque visite une expérience gastronomique inégalée. De la sélection méticuleuse des ingrédients à la préparation passionnée de chaque plat, nous nous efforçons constamment d'élever les normes pour offrir à nos convives un voyage culinaire exceptionnel. La fusion harmonieuse de la tradition malagasy et de l'innovation moderne distingue notre cuisine, et notre équipe dévouée travaille sans relâche pour créer des moments mémorables. Venez découvrir pourquoi La Table du Rova est plus qu'un restaurant ; c'est une célébration de la cuisine, de la culture et de l'hospitalité malagasy.`}
                </p>

                <div
                  style={{ fontFamily: "Josefin_Sans" }}
                  className="grid pb-8 md:grid-cols-2 gap-5"
                >
                  <div className="flex border gap-2 items-center border-orange-300 px-2 py-3 w-full ">
                    <svg
                      className="w-6 h-6 text-orange-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span> {`Service rapide`}</span>
                  </div>

                  <div className="flex border items-center gap-2 border-orange-300 px-2 py-3 w-full ">
                    <img
                      className="w-6 h-6"
                      src="/assets/images/icons/Icon(5).png"
                      alt=""
                    />
                    <span> {`Aliments frais`}</span>
                  </div>
                  <div className="flex items-center border  gap-2 border-orange-300 px-2 py-3 w-full ">
                    <svg
                      className="w-5 h-5 text-orange-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                      />
                    </svg>
                    <span> {`10/7 Service`}</span>
                  </div>
                  <div className="flex border items-center gap-2 border-orange-300 px-2 py-3 w-full ">
                    <img
                      className="w-6 h-6"
                      src="/assets/images/icons/Group.png"
                      alt=""
                    />
                    <span> {`Bon qualité`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageReservation;
