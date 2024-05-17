import React from "react";
import PageTransitionProvider from "../components/pageTrasitionProvider";
import Image from "next/image";
import { useTranslations } from "next-intl";
import heroImg from "@/public/hero-orange.png";
export default function About() {
  const t = useTranslations("About");
  return (
    <PageTransitionProvider>
      {/* CONTAINER */}
      <div className="h-full w-full flex  gap-12">
        {/* TEXT SECTION*/}
        <div className="h-1/2 md:h-full justify-around text-start md:text-start w-full lg:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-12 ">
          {/* BIOGRAPHY */}
          <div className=" mt-12 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">{t("title")}</h1>
            <p>{t("desc1")}</p>
            <p>{t("desc2")}</p>
          </div>
          {/* SKILLS */}
          <div className=" mt-12 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">{t("title2")}</h1>
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
            src={heroImg}
            placeholder="blur"
          />
        </div>
      </div>
    </PageTransitionProvider>
  );
}
