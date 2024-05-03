"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItem({ link }) {
  const currentPath = usePathname();
  console.log("👉🔥 ", currentPath);

  return (
    <div
      className={`${
        currentPath === link?.url &&
        "bg-gradient-to-b to-[#f57489bb]  from-[#fbca69a5] text-white"
      } rounded px-2 py-1`}
    >
      <Link
        className=" text-md font-semibold"
        href={link?.url}
        key={link?.title}
      >
        {link?.title}
      </Link>
    </div>
  );
}

export default NavbarItem;
