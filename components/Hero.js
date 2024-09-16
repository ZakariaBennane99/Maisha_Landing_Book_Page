"use client";

import React from 'react';
import '../styles/Hero.css'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-info-part">
          <div className="hello">HELLO,</div>
          <h1 className="Iam">I Am Maisha Leonard</h1>
          <div className="who">RESILIENT SUPERMOM</div>
          <p className="description">I am a devoted mother, resilient survivor, and emerging author, ready to share my transformative journey through life's toughest challenges.</p>
          <div>
            <button onClick={() => { window.open('https://www.amazon.com/dp/B0CCCSHQKP', '_blank') }} class="hero-button-1">Order My Book</button>
            <button onClick={() => { document.getElementById('about').scrollIntoView() }} class="animated-button">About Me</button>
          </div>
        </div>

        <div className="hero-image-part">
            <div className="image-container">
              <img src='book-cover.svg' />
          </div>
        </div>

      </div>
      
      {/* Ring elements for animation */}
      <div className="rings">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
        <div className="ring ring4"></div>
      </div>
    </section>
  );
}
