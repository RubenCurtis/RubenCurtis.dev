"use client";

import { useEffect, useState } from "react";
import Link from "next/link";//THIS WILL BE USED, BUT NOT YET

export default function Projects() {
  //set slide in from top state
  const [, setIsVisible] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1400);
    setTimeout(() => setShowTitle(true), 200); // "Projects"
    setTimeout(() => setShowSubtitle(true), 400); // "Still working on it!" #TODO fix this to project name or subtitle idk yet maybe i shouldve planned this better

    //Get elements that fade in on every page to work
    const header = document.getElementById("header");

    if (header) setTimeout(() => header.classList.add("fade-in-active"), 0);
  }, []);
  return (
    //Header TODO maybe do nav bar ?
    <section className="relative flex flex-col py-4 px-4 w-full max-w-screen-lg">
      <header id="header" className="w-full flex justify-between items-center fade-in bg-primary">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">
          rubencurtis.dev
          </Link>
        </h1>
      </header>

      <div className="relative flex flex-col items-start w-full bg-primary text-white p-4">
      <h1
          id="hero-title"
          className={`text-4xl font-bold mb-4 transition-all duration-700 ${ //Looks ugly
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
            Projects</h1>
        <h2
          id="projectnamething"
          className={`text-4xl font-bold mb-4 transition-all duration-700 ${ // Comment above me was right
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12" //Even copilot agreed with me
          }`}>
            Still working on it!</h2>
      </div>
      
    <section className="relative flex flex-col py-16 px-4 w-full h-full max-w-screen-lg"></section>
    </section>
  );
}