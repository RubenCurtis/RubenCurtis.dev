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
        <div className="relative flex flex-col items-start w-full bg-primary text-white p-4">
          <h1
            id="hero-title"
            className={`mb-4 font-bold transition-all duration-700 ${
              showTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 5.5rem)" }}
            >
            Projects
          </h1>

          <h2
            id="project-subtitle"
            className={`mb-4 font-bold transition-all duration-700 ${
              showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 5.5rem)" }}
            >
            All Projects:
          </h2>
        </div>
      </section>

  <div className="flex flex-col text-white">
    <section
      className={`h-[33.33vh] w-full flex flex-col items-start justify-start transition-all bg-secondary/40 border-2 border-tertiary duration-700 ${  //KMEANS HADOOP
        showProject1
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-12 invisible"
      }`}
    >
    <h2
      className={`p-8 font-semibold transition-all duration-700 ${
        showProject1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
      }`}
      style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 5.5rem)" }}
    >
      K-Means in Hadoop
    </h2>
    <p className="text-2xl px-8 pb-8 font-semibold">
      A project that implements the K-Means algorithm in Hadoop using Java.
    </p>
    <p className="text-2xl px-8 font-semibold">
      Tools Used:
    </p>
    <p className="text-m px-8 pb-8 opacity-50 font-semibold">
      Java, Apache Hadoop, Linux, Z Shell, Git, Maven, SSH.
    </p>
    <button className="bg-tertiary text-white px-4 py-2 rounded-md hover:bg-tertiary/50 transition duration-300 p-8 absolute bottom-4 right-4">
      <a href="https://github.com/RubenCurtis/K-MeansHadoopPUB"
      target="_blank"
      rel="noopener noreferrer">
      View on GitHub
      </a>
    </button>
    </section>
    
    <section
      className={`h-[33.33vh] w-full flex flex-col items-start justify-start transition-all bg-secondary/40 border-2 border-tertiary duration-700 ${ //RUBENCURTIS.DEV
        showProject2
          ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
      }`}
    >
    <h2 className="text-6xl p-8 font-semibold">
      rubencurtis.dev
    </h2>
    <p className="text-2xl px-8 pb-8 font-semibold">
      A website built with Next.js and Tailwind CSS.
    </p>
    <p className="text-2xl px-8 font-semibold">
      Tools Used:
    </p>
    <p className="text-m px-8 pb-8 opacity-50 font-semibold">
      Next.js, Tailwind CSS, TypeScript, React, Git, HTML.
    </p>
    <button className="bg-tertiary text-white px-4 py-2 rounded-md hover:bg-tertiary/50 transition duration-300 p-8 absolute bottom-4 right-4">
      <a href="https://github.com/RubenCurtis/rubencurtis.dev"
      target="_blank"
      rel="noopener noreferrer">
      View on GitHub
      </a>
    </button>
    </section>
  </div>
</div>
  );
}
// TODO: CLEAN THIS UP, MAYBE CHANGE PARENT DIV BECAUSE WHY IS IT A PARENT TO 3 SECTIONS???????
// ITS WORKING RIGHT NOW BUT ANY VISUAL CHANGES MIGHT NEED CHANGE TO SECTION