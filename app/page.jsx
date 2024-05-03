import Image from "next/image";
import Link from "next/link";
import PageTransitionProvider from "./components/pageTrasitionProvider";
export default async function Home() {
  return (
    <PageTransitionProvider>
      <div className=" p-4 font-regular br-red-100 h-full flex items-center justify-center gap-4   flex-col lg:flex-row font-inter">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
          <Image
            className="object-contain justify-start"
            alt="hero image"
            fill
            src="/hero-orange.png"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 md:h-full justify-center text-center md:text-start w-full md:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-8">
          <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-tight">
            Squadron Link, Crafting Digital Solutions with Precision 🚀.
          </div>
          <div className="text-sm sm:text-sm md:text-lg">
            At Squadron Link, we're masters of the digital domain, specializing
            in the art of building robust IT products and software. From sleek
            web applications to intuitive mobile apps, our squadron combines
            expertise and innovation to deliver solutions that elevate your
            digital presence to new heights 💡.
          </div>
          {/* BUTTONS CONTAINER */}
          <div className="flex justify-center lg:justify-start gap-4 ">
            <button className="bg-black  text-white px-4 py-2  text-sm sm:text-lg md:text-xl  shadow-lg shadow-red-200 font-light rounded-md">
              <Link href="/projects">View Portfolio</Link>
            </button>
            <button className="border-2 rounded-md border-black px-4 py-2  text-sm sm:text-lg md:text-xl">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </PageTransitionProvider>
  );
}
