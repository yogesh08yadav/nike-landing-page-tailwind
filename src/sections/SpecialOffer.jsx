import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          {" "}
          <span className="text-coral-red">Special</span> Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ipsum laborum vitae Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ipsum laborum vitae.
        </p>
        <div className="mt-11 flex flex-wrap gap4 gap-2">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
