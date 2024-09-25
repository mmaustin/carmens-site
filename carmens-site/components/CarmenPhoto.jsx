'use client';

import Image from "next/image";
import img from "@/public/gone-girl.jpg"

const CarmenPhoto = () => {
  return (
    <div className="w-1/3 h-full relative">
      <div
        className="w-[250px] h-[250px] mix-blend relative backdrop-blur-md z-0">
        <Image
          src={img}
          fill
          sizes="20vw"
          priority
          alt="carmen"
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  )
}
export default CarmenPhoto;