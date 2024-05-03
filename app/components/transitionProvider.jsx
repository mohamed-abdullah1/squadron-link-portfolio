"use client";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const links = [
  { url: "/", title: "Home 😎" },
  { url: "/about", title: "About ✨" },
  { url: "/contact", title: "Contact 🌟" },
  { url: "/projects", title: "Projects 🔥" },
];
const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence>
        {pathname !== "/" && (
          <>
            {" "}
            <motion.div
              className="fixed top-0 left-0 right-0 bottom-0 h-screen bg-black w-screen rounded-[] z-30 "
              initial={{ top: 0 }}
              animate={{ top: "100vh" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="fixed top-0 left-0 right-0 bottom-0 
          text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-7xl text-white m-auto z-40 text-center cursor-default w-fit h-fit capitalize"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, top: "100vh" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            >
              {links.find((l) => l?.url === pathname)?.title}
            </motion.div>
          </>
        )}
        <div className="h-24  z-100">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] px-2 sm:px-4 md:px-8 lg:px-24 z-100">
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TransitionProvider;
