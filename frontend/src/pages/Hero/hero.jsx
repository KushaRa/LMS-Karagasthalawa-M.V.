import React from "react";
import "./hero.css";
import Navbar from "../../components/Navbar/navBar";
/*import heroImage from "../../assets//hero-bg.png";*/



const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        
        <div className="hero-content">
          <h1>Welcome to the R/ Karagastalawa Library Management System</h1>
          <p>Your gateway to knowledge, resources, and endless learning!</p>
        </div>
      </div>

    </>
  ); 
};

export default Hero;
