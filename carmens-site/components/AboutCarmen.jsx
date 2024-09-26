'use client';

import { usePathname } from "next/navigation";
import CarmenPhoto from "./CarmenPhoto";

const AboutCarmen = () => {

  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div className="h-auto md:h-[275px] bg-red-500/60 flex flex-col md:flex-row justify-around items-center">
        {/* <div className="border">
        </div>
        <div className="border">
        </div> */}
        <div className="">
          <CarmenPhoto />
        </div>
        <p className="w-[300px] h-[250px] text-white mt-10 md:mt-14">Carmen is the bestest person in the whole wide world.  She's the bestest mother, wife, author, exercise instructor, friend, Knicks fan--sadly--and the bestest everything else too!  I suggest you buy all of her books, cause you don't want her folks from the DR to come knocking on your door!.</p>
      </div>
    )
  };

  return (

    null
  )
}
export default AboutCarmen;