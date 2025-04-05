"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Projects() {
  //set slide in from top state PER ELEMENT
  const [, setIsVisible] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1400);
    setTimeout(() => setShowTitle(true), 200); // "Projects"
    setTimeout(() => setShowSubtitle(true), 400); // "All projects:"
    setTimeout(() => setShowProject1(true), 600); // "Project 1"
    setTimeout(() => setShowProject2(true), 800); // "Project 2"
    setTimeout(() => setShowProject3(true), 1000); // "Project 3"

    //Get elements that fade in on every page to work, think back to the home page
    const header = document.getElementById("header");

    if (header) setTimeout(() => header.classList.add("fade-in-active"), 0);
  }, []);

  return (
    //Header TODO maybe do nav bar ?
    <div className="min-h-screen overflow-auto">
      <section className="relative flex flex-col py-4 px-4 w-full max-w-screen-lg">
        <header id="header" className="w-full flex justify-between items-center fade-in bg-primary">
          <h1 className="text-white text-xl font-bold">
            <Link href="/">rubencurtis.dev</Link>
          </h1>
        </header>

        <div className="relative flex flex-col items-start w-full bg-primary text-white p-4">
          <h1
            id="hero-title"
            className={`text-4xl font-bold mb-4 transition-all duration-700 ${ //Looks ugly
              showTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12" //
            }`}
          >
            Projects
          </h1>
          <h2
            id="project-subtitle"
            className={`text-4xl font-bold mb-4 transition-all duration-700 ${ // Comment above me was right
              showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12" //Even copilot agreed with me
            }`}
          >
            All Projects:
          </h2>
        </div>
      </section>

  <div className="flex flex-col text-white p-4">
  <section className={`text-4xl h-[33.33vh] font-bold w-full flex items-center justify-center mb-4 transition-all bg-secondary duration-700 ${ //HADOOP KMEANS SURELY!
            showProject1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
    <h2 className="h-[33.33vh] text-8xl font-semibold flex items-center justify-center">
      Project 1
    </h2>
  </section>
  <section className={`text-4xl h-[33.33vh] font-bold w-full flex items-center justify-center mb-4 transition-all bg-secondary duration-700 ${ //RUBENCURTIS.DEV
            showProject2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
    <h2 className="h-[33.33vh] text-8xl font-semibold flex items-center justify-center">
      Project 2
    </h2>
  </section>
  <section className={`text-4xl h-[33.33vh] font-bold w-full flex items-center justify-center mb-4 transition-all bg-secondary duration-700 ${ //unsure on this one however
            showProject3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}>
    <h2 className="h-[33.33vh] text-2xl font-semibold flex items-center justify-center">
      Project 3
    </h2>
  </section>
</div>
    </div>
  );
}
// TODO: CLEAN THIS UP, MAYBE CHANGE PARENT DIV BECAUSE WHY IS IT A PARENT TO 3 SECTIONS???????
// ITS WORKING RIGHT NOW BUT ANY VISUAL CHANGES MIGHT NEED CHANGE TO SECTION