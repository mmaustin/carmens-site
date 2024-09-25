'use client';

import Image from "next/image";
import img from "@/public/gone-girl.jpg"

const CarmenPhoto = () => {
  return (
    <div className="w-full h-full relative">
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