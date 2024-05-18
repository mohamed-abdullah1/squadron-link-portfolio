"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import harbyImg from "@/public/harby2.jpeg";
import mohamedImg from "@/public/moahmedElsayed.jpeg";
import salmaImg from "@/public/salma.jpeg";
import husseinImg from "@/public/hussein.jpeg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const teamMembers = [
  {
    id: 1,
    name: "harby",
    jobTitle: "backend",
    img: harbyImg,
  },
  {
    id: 2,
    name: "sayed",
    jobTitle: "frontend",
    img: mohamedImg,
  },
  {
    id: 3,
    name: "salma",
    jobTitle: "mobile",
    img: salmaImg,
  },
  {
    id: 4,
    name: "hussein ",
    jobTitle: "mobile",
    img: husseinImg,
  },
  {
    id: 5,
    name: "hussein ",
    jobTitle: "mobile",
    img: husseinImg,
  },
  {
    id: 6,
    name: "hussein ",
    jobTitle: "mobile",
    img: husseinImg,
  },
  {
    id: 7,
    name: "hussein ",
    jobTitle: "mobile",
    img: husseinImg,
  },
];
export default function CarouselSize() {
  const t = useTranslations("About");
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-xl lg:max-w-5xl ltr "
    >
      <CarouselContent className="w-full ltr">
        {teamMembers.map(({ name, id, jobTitle, img }, index) => (
          <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-50 bg-transparent border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col gap-2">
                  {/* IMAGE CONTAINER */}
                  <div className="rounded-[100%]  overflow-hidden w-56 h-56 flex justify-center items-center border-4 border-[#f66e03]">
                    <Image
                      src={img}
                      alt="harby image"
                      placeholder="blur"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-primary text-xl font-bold">{t(name)}</p>
                  <p className="text-gray-500 text-md">{t(jobTitle)}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
