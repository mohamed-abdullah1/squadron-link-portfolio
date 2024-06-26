"use client";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

function NavbarItem({ link }) {
  const currentPath = usePathname();

  return (
    <div
      className={`${
        currentPath === link.url + "ar" || currentPath === link.url + "en"
          ? "bg-gradient-to-b to-[#f57489bb]  from-[#fbca69a5] text-white"
          : currentPath.split("/")[currentPath.split("/").length - 1] ===
              link?.url.split("/")[link?.url?.split("/").length - 1] &&
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
