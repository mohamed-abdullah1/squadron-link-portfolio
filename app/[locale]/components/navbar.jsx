"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import NavbarItem from "./navbarItem";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import ModeToggle from "@/app/components/toggleMode";

const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/contact", title: "contact" },
  { url: "/projects", title: "projects" },
];
const hamburgerMenuVariantsTop = {
  open: {
    // background: "rgb(255,255,255)",
    rotate: 45,
  },
  closed: {
    // background: "rgb(0,0,0)",
    rotate: 0,
  },
};
const hamburgerMenuVariantsCenter = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
};
const hamburgerMenuVariantsBottom = {
  open: {
    // background: "rgb(255,255,255)",
    rotate: -45,
  },
  closed: {
    // background: "rgb(0,0,0)",
    rotate: 0,
  },
};
const blackBgVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: "99.9vw",
  },
};
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <div className="flex items-center justify-between h-full px-2 sm:px-4 md:px-8 lg:px-24">
      {/* LINKS ITEMS */}
      <div className="hidden md:flex gap-1  md:w-1/3 ">
        {links
          .map((link) => ({ ...link, title: t(link.title) }))
          .map((link, index) => (
            <NavbarItem link={link} key={index} />
          ))}
      </div>
      {/* LOGO */}
      <Link href="/" className="md:w-1/3 md:flex md:justify-center">
        <Image
          src={"/logo.svg"}
          width={200}
          height={200}
          className=" "
          objectFit="contain"
          alt="squadron link logo"
        />
      </Link>
      {/* HAMBURGER MENU */}
      <div
        className={` flex flex-col ${
          open ? "gap-[7px]" : "gap-[0.5rem]"
        } cursor-pointer z-50 md:hidden`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          className={`h-1 w-8 ${"bg-black dark:bg-white"} rounded origin-left`}
          variants={hamburgerMenuVariantsTop}
          animate={open ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className={`h-1 w-8 ${"bg-black dark:bg-white"} rounded`}
          variants={hamburgerMenuVariantsCenter}
          animate={open ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className={`h-1 w-8 ${"bg-black dark:bg-white"} rounded origin-left`}
          variants={hamburgerMenuVariantsBottom}
          animate={open ? "open" : "closed"}
        ></motion.div>
      </div>
      {/* ITEMS IN MOBILE VIEW */}
      {open && (
        <motion.div
          className={`absolute z-10 top-0 right-0 h-screen bg-gradient-to-b to-red-50  from-blue-100  dark:from-black dark:to-slate-900 w-screen flex flex-col items-center justify-center gap-6 md:hidden ${
            !open && "hidden"
          }`}
          // initial={{ right: 0 }}
          variants={blackBgVariants}
          animate={"open"}
          initial={"closed"}
        >
          {links
            .map((link) => ({ ...link, title: t(link.title) }))
            .map((link) => (
              <div
                className="text-primary text-3xl "
                onClick={() => setOpen(false)}
                key={link?.title}
              >
                <Link href={link.url} key={link?.title}>
                  {link?.title}
                </Link>
              </div>
            ))}
          <div className="text-white flex gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </motion.div>
      )}
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-2 md:gap-4 md:w-1/3 justify-center ">
        {/* <Image src="/facebook.png" width={20} height={20} alt="facebook" />
        <Image src="/dribbble.png" width={20} height={20} alt="dribbble" />
        <Image src="/github.png" width={20} height={20} alt="github" />
        <Image src="/linkedin.png" width={20} height={20} alt="linkedin" />
        <Image src="/instagram.png" width={20} height={20} alt="instagram" /> */}
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </div>
  );
}
