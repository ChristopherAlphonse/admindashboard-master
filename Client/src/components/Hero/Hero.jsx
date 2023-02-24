import {
  TbBrandAirbnb,
  TbBrandApple,
  TbBrandPaypal,
  TbBrandSpotify,
} from "react-icons/tb";

import HeroImg from "../../assets/heroimg.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="-m-8 flex flex-wrap">
          <div className="w-full p-8 md:w-1/2">
            <h1 className="lg:text-10xl font-heading mb-6 text-6xl font-bold leading-none md:max-w-xl md:text-8xl">
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
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
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
                  <TbBrandSpotify size={50} color="green" />
                </div>
              </div>
              <div className="w-auto p-3">
                <div>
                  <TbBrandApple size={50} color="black" />
                </div>
              </div>
              <div className="w-auto p-3">
                <div>
                  <TbBrandAirbnb size={50} color="red" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-8 md:w-1/2">
            <img
              className="transform transition duration-1000 ease-in-out hover:-translate-y-16"
              src={HeroImg}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
