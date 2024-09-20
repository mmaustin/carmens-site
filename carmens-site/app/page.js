'use client';

import Photo from "@/components/Photo";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import img from '@/public/gone-girl.jpg';
import BookSliderButtons from "@/components/BookSliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";

const books = [
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

  const [book, setBook] = useState(books[0]);

  const handleSlideChange = swiper => {
    const currentIndex = swiper.activeIndex;

    setBook(books[currentIndex]);
  }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] text-center">
              <h2 className="text-[42px] font-semibold leading-none group-hover:text-accent transition-all duration-500 capitalize">{book?.title}</h2>
              <p className="">{book?.description}</p>

              <div className="border border-white"></div>
              <div className="flex justify-center gap-4">
                <Link href={book?.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{books.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-5 w-full lg:w-[50%]">
            <Swiper spaceBetween={10} slidesPerView={1} className="lg:h-[420px] mb-12" onSlideChange={handleSlideChange}>
              {books.map((book, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-20"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={book.image}
                          fill
                          priority
                          className="object-cover"
                          sizes="100vw"
                          alt={book.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <BookSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-accent hoover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
