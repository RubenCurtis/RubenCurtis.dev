"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) setTimeout(() => header.classList.add("fade-in-active"), 0);
  }, []);
  return (
    <section className="relative flex flex-col py-4 px-4 w-full max-w-screen-lg">
      <header id="header" className="w-full flex justify-between items-center fade-in bg-primary">
        <h1 className="text-white text-xl font-bold"><Link href="/">rubencurtis.dev</Link></h1>
      </header>
      <div className="relative flex flex-col items-start w-full bg-primary text-white p-4">
        <h1 id="hero-title" className="text-white text-4xl font-bold mb-4 animate-slide-in-from-top">Projects</h1>
        <h2 id="projectnamething" className="text-white text-4xl font-bold mb-4 animate-slide-in-from-top">Still working on it!</h2>
      </div>
    <section className="relative flex flex-col py-16 px-4 w-full h-full max-w-screen-lg"></section>
    </section>
  );
}