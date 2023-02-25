import FooterHero from "../../components/footer/FooterHero/FooterHero.jsx";
import Hero from "../../components/Hero/Hero.jsx";
// import NavBar from "../../components/Navbar/navbar.jsx";
import NavBar from "../../../../Folder/Navbar/Navbar.jsx";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="bg-white">
        <NavBar />
        <Hero />
        <FooterHero />
      </main>
    </>
  );
};

export default Home;
