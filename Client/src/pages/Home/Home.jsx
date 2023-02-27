import { Footer, Header, HeroHome } from "../../partials";

import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <HeroHome />
      
        
      
       
      </main>

      <Footer />
    </div>
  );
}

export default Home;
