import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "https://google.com" },
  { icon: <FaFacebook />, path: "https://google.com" },
  { icon: <FaLinkedinIn />, path: "https://google.com" }
]


const SocialMedia = () => {
  return (
    <div className="flex gap-6 mb-4 md:mb-0">{
      socials.map((media, i) => {
        return <Link href={media.path} key={i} className="w-6 h-6 border border-red-500/60 rounded-full flex justify-center items-center text-red-500/60 text-base hover:bg-red-700/60 hover:text-white hover:transition-all duration-500" target="_blank" >{media.icon}</Link>
      })
    }</div>
  )
}
export default SocialMedia;