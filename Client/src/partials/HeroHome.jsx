import React from 'react';

const HeroHome = () => {

  return (
    <section className="flex h-screen items-center justify-center overflow-hidden bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
      <div className="max-w-6xl lg:max-w-screen-xxl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl lg:text-9xl font-extrabold leading-tighter tracking-tighter mb-4" >
              Master Your Inventory <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-cashapp">The Ultimate Management App</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
