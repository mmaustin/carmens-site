'use client';

import { usePathname } from "next/navigation";
import CarmenPhoto from "./CarmenPhoto";
import Photo from "./Photo";
import Image from "next/image";
import img from "@/public/gone-girl.jpg";

const AboutCarmen = () => {

  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div className="h-auto w-full bg-red-500/60 flex">
        {/* <div className="border-2 flex justify-center items-center relative"> */}
        {/* <div
          className="flex flex-col justify-around items-center mt-10 md:mt-0 w-[75%] md:w-[250px] h-[250px] mix-blend backdrop-blur-md z-0"> */}
        <div className="h-auto w-full my-10 mx-6 gap-8 flex flex-wrap justify-around items-center">
          <div className="">
            <CarmenPhoto />
          </div>
          {/* <Image
            src={img}
            fill
            priority
            sizes="100vw"
            alt="carmen"
            className="object-cover rounded-xl"
          // height='auto'
          // width='100%'
          /> */}
          {/* </div> */}
          <p className=" w-[200px] md:w-[250px] text-white flex justify-center items-center">Carmen is the bestest person in the whole wide world.  She's the bestest mother, wife, author, exercise instructor, friend, Knicks fan--sadly--and the bestest everything else too!  I suggest you buy all of her books, cause you don't want her folks from the DR to come knocking on your door!.</p>
        </div>
      </div>
    )
  };

  return (

    null
  )
}
export default AboutCarmen;