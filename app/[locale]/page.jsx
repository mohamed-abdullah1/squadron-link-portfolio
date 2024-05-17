"use client";
import Image from "next/image";
import { Link } from "../../navigation";
import PageTransitionProvider from "./components/pageTrasitionProvider";
import { useLocale, useTranslations } from "next-intl";
import heroImg from "@/public/hero_2_@.png";
export default async function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <PageTransitionProvider>
      <div className=" p-4 font-regular br-red-100 h-full flex items-center justify-center gap-4 lg:gap-8   flex-col lg:flex-row font-inter">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
          <Image
            className={`object-contain justify-start ${
              locale === "ar" && "scale-x-[-1]"
            }`}
            alt="hero image"
            fill
            src={heroImg}
            placeholder="blur"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 md:h-full justify-center text-center md:text-start w-full md:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-8">
          <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-tight">
            {t("title")}
          </div>
          <div className="text-sm sm:text-sm md:text-lg">{t("desc")}</div>
          {/* BUTTONS CONTAINER */}
          <div className="flex justify-center lg:justify-start gap-4 ">
            <button className="bg-black  text-white px-4 py-2  text-sm sm:text-lg md:text-xl  shadow-lg shadow-red-200 font-light rounded-md">
              <Link href="/projects">{t("viewProfile")}</Link>
            </button>
            <button className="border-2 rounded-md border-black px-4 py-2  text-sm sm:text-lg md:text-xl">
              <Link href="/contact">{t("contactUs")}</Link>
            </button>
          </div>
        </div>
      </div>
    </PageTransitionProvider>
  );
}
