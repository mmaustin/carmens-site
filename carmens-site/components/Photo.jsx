'use client';

import Image from "next/image";
import img from "@/public/gone-girl.jpg"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-[250px] h-[325px] md:w-[325px] md:h-[350px] mix-blend relative backdrop-blur-md z-0">
        <Image
          src={img}
          fill
          sizes="20vw"
          priority
          alt="gone girl"
          className="object-cover"
        />
      </div>
    </div>
  )
}
export default Photo;