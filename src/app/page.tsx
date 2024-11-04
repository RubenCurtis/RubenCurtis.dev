// src/app/page.tsx

import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-primary text-white">
      {/* Navigation Bar */ /*TODO Blend with lower content + organise list*/}
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

      {/* Hero Section *//*TODO Reorganise positions of h2,p and button*/}
      <section className="relative flex flex-col items-center text-center py-16 px-4 flex-1 overflow-hidden">

        <h2 className="text-4xl font-bold mb-4 relative z-10">H2 Title</h2>
        <p className="text-lg mb-8 max-w-lg relative z-10">
          p
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-white hover:text-secondary transition-colors relative z-10">
          Button
        </button>
      </section>

      {/* Footer *//*TODO BLEND WITH above content*/}
      <footer className="w-full bg-secondary text-white text-center p-4">
        <p>P</p>
      </footer>
    </div>
  );
}
