import React from 'react';
import temp from "../assets/images/pic.webp"

const HeroHome = () => {

  return (
    <section className="flex h-screen items-center justify-center overflow-hidden  lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
      


      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Dashboard App
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to your dashboard app! This is a free and open-source template that you can use as a starting point for building your own dashboard app. It was built using the utility classes from 
            </p>
            
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={temp} alt="dashboard" className="object-cover object-center w-full h-full rounded-lg shadow-lg"/>
          </div>                
        </div>
      </section>

      
    </section>
  );
}

export default HeroHome;
