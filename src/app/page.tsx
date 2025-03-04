"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [skipAnimations, setSkipAnimations] = useState(false);

  // Set up a click event listener to skip animations
  useEffect(() => {
    const handleClick = () => {
      if (!skipAnimations) {
        setSkipAnimations(true);
      }
    };

    // Add click event listener
    document.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [skipAnimations]);

  useEffect(() => {
    // Get the elements we want to animate
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const paragraph = document.getElementById("hero-paragraph");
    const button = document.getElementById("hero-button");
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    // If skipAnimations is true, add fade-in-active directly
    if (skipAnimations) {
      if (title) title.classList.add("fade-in-active");
      if (subtitle) subtitle.classList.add("fade-in-active");
      if (paragraph) paragraph.classList.add("fade-in-active");
      if (button) button.classList.add("fade-in-active");
      if (header) header.classList.add("fade-in-active");
      if (footer) footer.classList.add("fade-in-active");
    } else {
      // Staggered fade-in animation
      if (title) setTimeout(() => title.classList.add("fade-in-active"), 100);
      if (subtitle) setTimeout(() => subtitle.classList.add("fade-in-active"), 1600);
      if (paragraph) setTimeout(() => paragraph.classList.add("fade-in-active"), 2600);
      if (button) setTimeout(() => button.classList.add("fade-in-active"), 2600);
      if (header) setTimeout(() => header.classList.add("fade-in-active"), 2600);
      if (footer) setTimeout(() => footer.classList.add("fade-in-active"), 2600);
    }
  }, [skipAnimations]);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-primary text-white w-full overflow-hidden">
      {/* Navigation Bar */}
      <header id="header" className="w-full flex justify-between items-center p-4 bg-primary opacity-0 fade-in">
        <h1 className="text-xl font-bold">rubencurtis.dev</h1>
        
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden relative">
          <button 
            className="text-white px-4 py-2 border border-secondary rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 z-50 bg-primary border border-secondary rounded-md shadow-lg">
              <li><Link href="/about" className="block hover:bg-secondary w-full px-4 py-2">About</Link></li>
              <li><Link href="/projects" className="block hover:bg-secondary w-full px-4 py-2">Projects</Link></li>
              <li><Link href="/latestproject" className="block hover:bg-secondary w-full px-4 py-2">Latest Project</Link></li>
              <li><Link href="/contact" className="block hover:bg-secondary w-full px-4 py-2">Contact</Link></li>
            </ul>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4">
            <li className="hover:text-secondary"><Link href="/about">About</Link></li>
            <li className="hover:text-secondary"><Link href="/projects">Projects</Link></li>
            <li className="hover:text-secondary"><Link href="/latestproject">Latest Project</Link></li>
            <li className="hover:text-secondary"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Moving Blob Background */}
      <div className="blob pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-start text-left py-16 px-4 flex-1 overflow-hidden w-full h-full max-w-screen-lg">
        {/* Container for Text */}
        <div className="flex flex-col items-start max-w-lg w-full md:w-1/3">
          <h2 id="hero-title" className="text-4xl font-bold mb-4 relative z-10 opacity-0 fade-in">
            Hello!
          </h2>
          <h3 id="hero-subtitle" className="text-2xl font-bold mb-4 relative z-10 opacity-0 fade-in">
            I&apos;m Ruben
          </h3>
          <p id="hero-paragraph" className="text-lg mb-8 max-w-lg relative z-10 opacity-0 fade-in">
            I&apos;m an aspiring software engineer.
          </p>
        </div>
    
        {/* Download CV Button */}
        <button
        id="hero-button"
        className="absolute left-0 outline-4 outline-blue-500 rounded-md transform transition-all duration-400 border-blue-400 top-1/2 translate-y-1/2 bg-secondary text-white px-6 py-3 hover:bg-white hover:text-secondary hover:scale-105 shadow-blue-500 relative z-10 opacity-0 fade-in"
        style={{filter:'drop-shadow(4px 4px 4px #0b1185)',}}>
          Download my CV
        </button>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full bg-primary text-white text-center p-4 opacity-0 fade-in">
        <p>rubencurtis.dev</p>
      </footer>
    </div>
  );
}
