import React from 'react';
import './Hero.css';

const Hero = () => (
  <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
    <div className="content">
      <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
      <h2>Season 2 now available</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
      
    </div>
    <div className="overlay"></div>
  </div>
)

export default Hero;