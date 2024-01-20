
import React from "react";
import Image from "next/image";
const Cardflex = () => {
  return (
    <div>
      <a className="inline-flex mb-6 items-center">
        <Image
          alt="testimonial"
          src="/assets/images/home/client1.png"
          width={100}
          height={50}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <span className="flex-grow flex flex-col pl-4">
          <span
            style={{ fontFamily: "cormorant" }}
            className="title-font font-medium text-white"
          >
            Holden Caulfield
          </span>
          <span
            style={{ fontFamily: "Josefin_Sans" }}
            className="text-orange-300 text-sm"
          >
            UI DEVELOPER
          </span>
        </span>
      </a>
    </div>
  );
};

export default Cardflex;
