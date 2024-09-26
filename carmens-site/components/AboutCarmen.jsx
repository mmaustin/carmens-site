'use client';

import { usePathname } from "next/navigation";
import CarmenPhoto from "./CarmenPhoto";

const AboutCarmen = () => {

  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div className="h-[275px] bg-red-400/65 flex flex-row justify-around items-center">
        {/* <div className="border">
        </div>
        <div className="border">
        </div> */}
        <div className="">
          <CarmenPhoto />
        </div>
        <p className="w-[250px] h-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa aliquid debitis, sequi aperiam quae iusto temporibus labore accusantium praesentium fuga doloremque. Optio praesentium ab quis suscipit inventore? Dolorem, commodi.</p>
      </div>
    )
  };

  return (

    null
  )
}
export default AboutCarmen;