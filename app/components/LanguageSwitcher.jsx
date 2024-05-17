import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  return (
    <div className="text-3xl cursor-pointer  w-full text-center flex gap-2 justify-end">
      <Link href={pathname.length > 3 ? "/ar" : "ar"}>🇸🇦</Link>
      <p className="text-lg">|</p>
      <Link href={pathname.length > 3 ? "/en" : "en"}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Link>
    </div>
  );
};

export default LanguageSwitcher;
