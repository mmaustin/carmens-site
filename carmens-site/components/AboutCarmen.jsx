'use client';

import { usePathname } from "next/navigation";
import CarmenPhoto from "./CarmenPhoto";

const AboutCarmen = () => {

  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div className="h-auto w-full bg-red-500/60 flex">
        <div className="h-auto w-full my-10 mx-6 gap-8 flex flex-wrap justify-around items-center">
          <div className="">
            <CarmenPhoto />
          </div>
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