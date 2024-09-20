'use client';

import Photo from "@/components/Photo";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import img from '@/public/gone-girl.jpg';
import BookSliderButtons from "@/components/BookSliderButtons";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

const projects = [
  {
    title: "uptown menace",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores sed vel quis at ab.Vero incidunt dolore, repellendus aperiam officiis vitae doloremque magni deserunt laborum, modi recusandae labore unde praesentium!",
    image: img,
    live: "https://github.com/mmaustin",
  },
  {
    title: "turning back time",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores sed vel quis at ab.Vero incidunt dolore, repellendus aperiam officiis vitae doloremque magni deserunt laborum, modi recusandae labore unde praesentium!",
    image: img,
    live: "https://github.com/mmaustin",
  },
  {
    title: "abuelita . . . ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores sed vel quis at ab.Vero incidunt dolore, repellendus aperiam officiis vitae doloremque magni deserunt laborum, modi recusandae labore unde praesentium!",
    image: img,
    live: "https://github.com/mmaustin",
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl my-10 font-serif">

        </h1>
        <div className="flex flex-row justify-around items-center columns-2 mb-8 lg:mb-0 rounded-xl w-full">
          <div>
            <Photo />
          </div>
          <div>
            <Photo />
          </div>
          {/* <h4 className="border">go to the center!</h4>
          <h4 className="border">go to the center!</h4> */}
        </div>
      </div>
    </div>
  );
}
