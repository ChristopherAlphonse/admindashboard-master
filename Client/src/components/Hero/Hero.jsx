import {
  TbBrandAirbnb,
  TbBrandApple,
  TbBrandChrome,
  TbBrandLinkedin,
  TbBrandPaypal,
  TbBrandSpotify,
} from "react-icons/tb";

import HeroImg from "../../assets/heroimg.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="--100vh overflow-hidden">
      <div className="container mx-auto px-4">
        <div className=" flex flex-wrap">
          <div className="w-full px-4 sm:px-6 sm:py-16 lg:w-1/2 ">
            <h1 className="lg:text-10xl  md:max-w-xxl mb-6 text-6xl font-bold leading-none md:text-8xl">
              Discover the best inventory Manager.
            </h1>
            <p className="mb-11 text-lg font-medium text-gray-900 md:max-w-md">
              Get the best-in-class professional help with a click of a button.
            </p>
            <div className="-m-2.5 mb-20 flex flex-wrap">
              <div className="w-full p-2.5 md:w-auto">
                <div className="block">
                  <button
                    className="w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                    type="button"
                  >
                    Join Free for 30 Days
                  </button>
                </div>
              </div>
              <div className="w-full p-2.5 md:w-auto">
                <div className="block">
                  <button
                    className="w-full rounded-xl border border-gray-300 bg-transparent py-4 px-9 font-semibold transition duration-200 ease-in-out hover:border-gray-400 hover:bg-gray-100 focus:ring focus:ring-gray-50"
                    type="button"
                  >
                    <div className="-m-1 flex flex-wrap items-center justify-center">
                      <div className="w-auto p-1">
                        <span className="text-gray-900">Book a call</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="mb-6 text-sm font-semibold uppercase text-gray-500">
              Trusted and loved by 100+ tech first teams
            </p>
            <div className="-m-3 flex flex-wrap">
              <div className="w-auto p-3">
                <div>
                  <TbBrandSpotify size={50} color="#1DB954" />
                </div>
              </div>
              <div className="w-auto p-3">
                <div>
                  <TbBrandApple size={50} color="gray" />
                </div>
              </div>
              <div className="w-auto p-3">
                <div>
                  <TbBrandAirbnb size={50} color="#FF5A5F" />
                </div>
              </div>
              <div className="w-auto p-3">
                <div>
                  <TbBrandLinkedin size={50} color="#0e76a8" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-20 w-full sm:h-96 lg:h-[2vh] lg:w-1/2 ">
            <img
              alt="Welcome"
              src={HeroImg}
              className="rounded-tl-md rounded-br-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
