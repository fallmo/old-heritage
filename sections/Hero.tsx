import { FC } from "react";
import { Button } from "../components/Button";

export const Hero: FC<{}> = () => {
  return (
    <div className="flex-1 flex relative">
      <div
        style={{ backgroundImage: 'url("/patterns.jpg")' }}
        className="absolute left-0 right-0 top-0 bottom-0 bg-fixed"
      />
      <div className="bg-red-1 absolute left-0 right-0 top-0 bottom-0 opacity-90"></div>
      <div className="relative flex-1 flex flex-col items-center gap-y-2 justify-center">
        <div className="text-center text-4xl md:text-7xl text-white font-bold sm:mb-1">
          <h1 className="">Accelerate.</h1>
          <h1 className="">Innovate.</h1>
          <h1 className="">Loremsum.</h1>
        </div>
        <p className="sm:text-lg md:text-xl text-gray-200 px-2 md:px-0 w-[300px] sm:w-[400px] md:w-[550px] text-center">
          Accelerate innovation with simple, affordable, and accessible Linux cloud solutions and services.
          See why developers around the world trust Bananas
        </p>

        <a href="#solutions">
          <Button label="Explore our Solutions" variant="dark" size="lg" />
        </a>
      </div>
    </div>
  );
};
