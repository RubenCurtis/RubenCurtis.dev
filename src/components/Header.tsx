'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { //Ensure header rendering
    const header = document.getElementById("header");
    if (header) {
      setTimeout(() => header.classList.add("fade-in-active"), 150);
    }
  }, []);;

  return (
    <header
        id="header"
        className="w-full flex justify-between items-center p-4 bg-primary text-primary opacity-0 fade-in"
      >
        <h1 className="text-xl font-bold"><Link href="/" rel="noopener noreferrer">rubencurtis.dev</Link></h1>
        <div className="md:hidden relative">
          <button
            className="text-white px-4 py-2 border border-secondary rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 z-50 bg-primary border border-secondary rounded-md shadow-lg">
              <li>
                <Link href="#about" className="block hover:bg-secondary w-full px-4 py-2">About</Link>
              </li>
              <li>
                <Link href="/projects" className="block hover:bg-secondary w-full px-4 py-2">Projects</Link>
              </li>
              <li>
                <Link href="https://github.com/RubenCurtis/rubencurtis.dev" target="_blank" rel="noopener noreferrer" className="block hover:bg-secondary w-full px-4 py-2">Latest Project</Link>
              </li>
              <li>
                <Link href="#contact" className="block hover:bg-secondary w-full px-4 py-2">Contact</Link>
              </li>
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
  );
}