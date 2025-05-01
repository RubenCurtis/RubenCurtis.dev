"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [skipAnimations, setSkipAnimations] = useState(false);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAboutVisible(true);
    }, observerOptions);

    const contactObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setContactVisible(true), 300);
    }, observerOptions);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (contactRef.current) contactObserver.observe(contactRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (contactRef.current) contactObserver.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (!skipAnimations) setSkipAnimations(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [skipAnimations]);

  useEffect(() => {
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const paragraph = document.getElementById("hero-paragraph");
    const button = document.getElementById("hero-button");
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (skipAnimations) {
      [title, subtitle, paragraph, button, header, footer].forEach(el => el?.classList.add("fade-in-active"));
    } else {
      setTimeout(() => title?.classList.add("fade-in-active"), 100);
      setTimeout(() => subtitle?.classList.add("fade-in-active"), 100);
      setTimeout(() => paragraph?.classList.add("fade-in-active"), 100);
      setTimeout(() => button?.classList.add("fade-in-active"), 100);
      setTimeout(() => header?.classList.add("fade-in-active"), 400);
      setTimeout(() => footer?.classList.add("fade-in-active"), 400);
    }
  }, [skipAnimations]);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-primary text-white w-full overflow-auto">
      <style jsx global>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>

      <header id="header" className="w-full flex justify-between items-center p-4 bg-primary opacity-0 fade-in">
        <h1 className="text-xl font-bold">rubencurtis.dev</h1>

        <div className="md:hidden relative">
          <button 
            className="text-white px-4 py-2 border border-secondary rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 z-50 bg-primary border border-secondary rounded-md shadow-lg">
              <li><Link href="#about" className="block hover:bg-secondary w-full px-4 py-2">About</Link></li>
              <li><Link href="/projects" className="block hover:bg-secondary w-full px-4 py-2">Projects</Link></li>
              <li><Link href="https://github.com/RubenCurtis/rubencurtis.dev" target="_blank" rel="noopener noreferrer" className="block hover:bg-secondary w-full px-4 py-2">Latest Project</Link></li>
              <li><Link href="#contact" className="block hover:bg-secondary w-full px-4 py-2">Contact</Link></li>
            </ul>
          )}
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-4">
            <li className="hover:text-secondary"><a href="#about">About</a></li>
            <li className="hover:text-secondary"><Link href="/projects">Projects</Link></li>
            <li className="hover:text-secondary"><Link href="https://github.com/RubenCurtis/rubencurtis.dev" target="_blank" rel="noopener noreferrer">Latest Project</Link></li>
            <li className="hover:text-secondary"><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="blob pointer-events-none z-10"></div>

      <section className="relative flex items-center justify-center text-center py-16 px-4 min-h-screen w-full">
        <div className="flex flex-col items-start max-w-lg w-full md:w-1/3">
          <h2 id="hero-title" className="text-4xl font-bold mb-4 relative z-10 opacity-0 fade-in">Hello!</h2>
          <h3 id="hero-subtitle" className="text-2xl font-bold mb-4 relative z-10 opacity-0 fade-in">I&apos;m Ruben</h3>
          <p id="hero-paragraph" className="text-lg mb-8 max-w-lg relative z-10 opacity-0 fade-in">I&apos;m an aspiring software engineer.</p>
        </div>
        <a href="/RUBENCURTIS.pdf" download>
        <button
          id="hero-button"
          className="absolute left-0 outline-4 outline-blue-500 rounded-md transform transition-all duration-400 border-blue-400 top-1/2 translate-y-1/2 bg-secondary text-white px-6 py-3 hover:bg-white hover:text-secondary hover:scale-105 shadow-blue-500 relative z-10 opacity-0 fade-in"
          style={{ filter: 'drop-shadow(4px 4px 4px #0b1185)' }}
        >
          Download my CV
        </button>
        </a>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className={`relative flex flex-shrink-0 items-center justify-start text-left py-16 px-4 flex-1 overflow-auto scroll-smooth w-full max-w-screen-lg transition-opacity duration-1000 ${aboutVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I&apos;ve been writing programs since the age of thirteen, I enjoy the challenges of solving problems and building software that makes a difference.
          Recently graduated from Royal Holloway, University of London with a degree in Computer Science, the course providing me with the necessary skills 
          for creating efficient software algorithms.
          <br /><br />
          Based in Essex, I am focused on expanding my knowledge of programming languages, both learning new languages and expanding my knowledge of languages
          I am already proficient in. 
        </p>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`relative flex flex-shrink-0 items-center justify-center text-center py-16 px-4 flex-1 overflow-auto scroll-smooth w-full max-w-screen-lg transition-opacity duration-1000 ${contactVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <a href="mailto:hello@rubencurtis.dev" className="text-gray-600 hover:text-blue-800 transition-colors p-2" aria-label="Send email">
          <MdEmail size={36} />
        </a>
        <a href="https://www.linkedin.com/in/rubencurtis/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 transition-colors p-2" aria-label="LinkedIn profile">
          <FaLinkedin size={36} />
        </a>
        <a href="https://github.com/rubencurtis" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 transition-colors p-2" aria-label="GitHub profile">
          <FaGithub size={36} />
        </a>
      </section>

      <footer id="footer" className="w-full bg-primary text-white text-center p-4 opacity-0 fade-in z-0">
        <p>rubencurtis.dev</p>
      </footer>
    <SpeedInsights />
    </div>
  );
}