"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  useEffect(() => {
    // Cool stuff here
  }, []);
  return (
    <section className="relative flex flex-col py-4 px-4 w-full max-w-screen-lg">
      <header id="header" className="w-full flex justify-between items-center  bg-primary">
        <h1 className="text-white text-xl font-bold"><Link href="/">rubencurtis.dev</Link></h1>
      </header>
      <div className="relative flex flex-col items-start w-full bg-primary text-white p-4">
        <h1 id="hero-title" className="text-white text-4xl font-bold mb-4">Projects</h1>
        <p>Still working on it!</p>
      </div>
    <section className="relative flex flex-col py-16 px-4 w-full h-full max-w-screen-lg"></section>
    </section>
  );
}