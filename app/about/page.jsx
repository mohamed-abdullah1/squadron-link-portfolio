import React from "react";
import PageTransitionProvider from "../components/pageTrasitionProvider";
import Image from "next/image";

export default function About() {
  return (
    <PageTransitionProvider>
      {/* CONTAINER */}
      <div className="h-full w-full flex  gap-12">
        {/* TEXT SECTION*/}
        <div className="h-1/2 md:h-full justify-around text-start md:text-start w-full lg:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-12 ">
          {/* BIOGRAPHY */}
          <div className="border mt-12 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">BIOGRAPHY 🧩</h1>
            <p>
              Our squadron is comprised of seasoned experts and visionary minds,
              united by a passion for pushing the boundaries of possibility in
              the digital landscape. Through a harmonious blend of expertise and
              creativity, we have mastered the art of transforming concepts into
              tangible realities, propelling our clients' digital presence to
              unprecedented levels of success.
            </p>
            <p>
              At Squadron Link, we believe in the power of collaboration and
              synergy, working closely with our clients to understand their
              unique goals and challenges. Armed with this insight, we embark on
              a journey of discovery and creation, leveraging our technical
              prowess and inventive spirit to engineer solutions that surpass
              expectations.
            </p>
          </div>
          {/* SKILLS */}
          <div className="border mt-12 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">SKILLS 🌟</h1>
            <div className="flex flex-wrap gap-2">
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                REACT JS
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                NEXT JS
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                TYPSCRIPT
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                JAVASCRIPT
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                JAVA
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                SPRING
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                DART
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                FLUTTER
              </div>
              <div className="bg-black p-4 rounded cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-black text-white">
                FIGMA
              </div>
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="h-1/2 w-full md:h-full md:w-1/2 relative hidden lg:flex">
          <Image
            className="object-contain "
            alt="hero image"
            fill
            src="/hero-orange.png"
          />
        </div>
      </div>
    </PageTransitionProvider>
  );
}
