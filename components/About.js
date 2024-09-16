'use client';

import React from 'react';
import { useEffect, useRef } from "react";
import '../styles/SectionAnimation.css'; 
import '../styles/About.css'; 


export default function About() {

  const sectionRef = useRef(null);
  const sectionRefTwo = useRef(null);

  useEffect(() => {
    const sectionOne = sectionRef.current;
    const sectionTwo = sectionRefTwo.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    // Create the observer with the callback
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    // Observe both sections
    if (sectionOne) observer.observe(sectionOne);
    if (sectionTwo) observer.observe(sectionTwo);

    // Cleanup the observer
    return () => {
      if (sectionOne) observer.unobserve(sectionOne);
      if (sectionTwo) observer.unobserve(sectionTwo);
    };
  }, []);


  return (
    <section id='about' className="about-section">
      <div className='title'>
        <span>ABOUT</span>
        <h2>My Journey Through Pain & Suffering</h2>
        <img className='divider' src='divider.svg'/>
      </div>
      <div ref={sectionRef} className="main animated-section">
        
        <div className="left-div">
          <img src='images/maisha1.jpg' />
        </div>
        <div class="right-div">
          <p>I never imagined that I would one day be writing my autobiography. I never thought I would overcome the challenges and hardships that I went through. But as Romans 8:31 reminds us, “If God is for us, who can be against us?” And according to Romans 8:37, “We are more than conquerors through him who loved us.”</p>
        
          <p>These verses have become guiding lights in my life, reminding me of the strength and victory I have through my faith in Jesus Christ. As I reflect upon the journey of my life and the challenges I have faced, I am deeply moved by what I perceive as an unwavering and boundless love from God.</p>
        
          <p>Despite experiencing trials that may have broken others beyond repair, I have emerged whole. I am struck by the realization that this can only be attributed to God’s unconditional love for me. At times, I have doubted my existence, feeling as though I was a mistake.</p>
          
          <p>Yet, through my faith, I have come to understand that God has reassured me that I am not an accident but rather a precious creation of His divine handiwork. Ephesians 2:10: “For we are his workmanship; created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.”</p>
        </div>
      </div>

      <div className='section-divider'>
        <h2>It's Been God All The Way...</h2>
        <img className='divider' src='divider.svg'/>
      </div>

      <div ref={sectionRefTwo} className="main-2 animated-section">
        
        <div class="left-div">
          <p>I never imagined that I would one day be writing my autobiography. I never thought I would overcome the challenges and hardships that I went through. But as Romans 8:31 reminds us, “If God is for us, who can be against us?” And according to Romans 8:37, “We are more than conquerors through him who loved us.”</p>
        
          <p>These verses have become guiding lights in my life, reminding me of the strength and victory I have through my faith in Jesus Christ. As I reflect upon the journey of my life and the challenges I have faced, I am deeply moved by what I perceive as an unwavering and boundless love from God.</p>
        
          <p>Despite experiencing trials that may have broken others beyond repair, I have emerged whole. I am struck by the realization that this can only be attributed to God’s unconditional love for me. At times, I have doubted my existence, feeling as though I was a mistake.</p>
          
          <p>Yet, through my faith, I have come to understand that God has reassured me that I am not an accident but rather a precious creation of His divine handiwork. Ephesians 2:10: “For we are his workmanship; created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.”</p>
        </div>
        <div className="right-div">
          <img src='images/maisha2.jpg' />
        </div>
      </div>
    </section>
  );
}
  