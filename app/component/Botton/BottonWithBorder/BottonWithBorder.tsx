import React from "react";
import { BottonInterface } from "@/app/interface/Botton/BottonInterface";


const BottonWithBorder: React.FC<BottonInterface> = ({ title }) => {
  return (
    <div>
      <h3
        style={{ fontFamily: "Josefin_Sans" }}
        className=" inline-block px-6 py-1  text-white text-base md:text-2xl font-bold border-orange-300 border-y-2"
      >
        {title}
      </h3>
    </div>
  );
};

export default BottonWithBorder;
