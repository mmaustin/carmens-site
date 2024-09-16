'use client';

import Image from "next/image";
import img from "@/public/gone-girl.jpg"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div
          className="w-[298px] h-[498px] mix-blend relative backdrop-blur">
          <Image
            src={img}
            fill
            sizes="20vw"
            priority
            alt="gone girl"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
export default Photo;