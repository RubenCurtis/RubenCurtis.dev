"use client";//very important!!!!

import React, { useEffect } from 'react';


export default function HomePage() {
  useEffect(() => {
    // Get the elements we want to animate
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const paragraph = document.getElementById("hero-paragraph");
    const button = document.getElementById("hero-button");

    // Add fade-in class with staggered timing using setTimeout
    if (title) setTimeout(() => title.classList.add("fade-in-active"), 100);
    if (subtitle) setTimeout(() => subtitle.classList.add("fade-in-active"), 1600);
    if (paragraph) setTimeout(() => paragraph.classList.add("fade-in-active"), 2600);
    if (button) setTimeout(() => button.classList.add("fade-in-active"), 2600);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary text-white">
      {/* Navigation Bar */}
      <header className="w-full flex justify-between items-center p-4 bg-secondary">
        <h1 className="text-xl font-bold">H1 Title</h1>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:text-primary transition-colors">List1</li>
            <li className="hover:text-primary transition-colors">List2</li>
            <li className="hover:text-primary transition-colors">List3</li>
            <li className="hover:text-primary transition-colors">List4</li>
          </ul>
        </nav>
      </header>

      {/* Moving Blob Background */}
      <div className="blob"></div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-between text-left py-16 px-4 flex-1 overflow-hidden">
        <div className="flex flex-col">
          <h2
            id="hero-title"
            className="text-4xl font-bold mb-4 relative z-10 opacity-0 fade-in"
          >
            Hello!
          </h2>
          <h3
            id="hero-subtitle"
            className="text-2xl font-bold mb-4 relative z-10 opacity-0 fade-in"
          >
            I'm Ruben
          </h3>
          <p
            id="hero-paragraph"
            className="text-lg mb-8 max-w-lg relative z-10 opacity-0 fade-in"
          >
            I'm an aspiring software engineer.
          </p>
        </div>

        <button
          id="hero-button"
          className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-white hover:text-secondary transition-colors relative z-10 opacity-0 fade-in"
        >
          Download my CV
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary text-white text-center p-4">
        <p>P</p>
      </footer>
    </div>
  );
}
