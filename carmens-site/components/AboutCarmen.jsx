'use client';

import { usePathname } from "next/navigation";
import CarmenPhoto from "./CarmenPhoto";

const AboutCarmen = () => {

  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div className="h-auto bg-red-400/80 flex flex-col md:flex-row justify-around items-center">
        <CarmenPhoto />
        <p className="w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa aliquid debitis, sequi aperiam quae iusto temporibus labore accusantium praesentium fuga doloremque. Optio praesentium ab quis suscipit inventore? Dolorem, commodi.</p>
      </div>
    )
  };

  return (

    null
  )
}
export default AboutCarmen;