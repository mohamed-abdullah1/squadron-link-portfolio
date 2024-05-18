import Link from "next/link";
import { usePathname } from "next/navigation";

// const LanguageSwitcher = () => {
//   return (
//     <div className="text-3xl cursor-pointer  w-full text-center flex gap-2 justify-end">
//       <Link href={pathname.length > 3 ? "/ar" : "ar"}>🇸🇦</Link>
//       <p className="text-lg">|</p>
//       <Link href={pathname.length > 3 ? "/en" : "en"}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Link>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslations } from "use-intl";

export default function DropdownMenuDemo() {
  const pathname = usePathname();
  const t = useTranslations("Languages");
  return (
    <div className={`w-full flex justify-end`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 bg-inherit border-primary border-2"
            // size="icon"
          >
            <p className="text-primary">{t("languages")}</p>
            <Globe size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuGroup>
            <Link href={pathname.length > 3 ? "/ar" : "ar"}>
              <DropdownMenuItem>
                {t("arabic")}
                <DropdownMenuShortcut className={"text-xl opacity-1"}>
                  🇸🇦
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={pathname.length > 3 ? "/en" : "en"}>
              <DropdownMenuItem>
                {t("english")}
                <DropdownMenuShortcut className={"text-xl opacity-1"}>
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
