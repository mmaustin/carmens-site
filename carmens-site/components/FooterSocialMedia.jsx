import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "https://github.com/mmaustin" },
  { icon: <FaFacebook />, path: "https://linkedin.com/in/mccray-austin" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/mccray-austin" }
]


const FooterSocialMedia = () => {
  return (
    <div className="flex gap-6 mb-4 md:mb-0">{
      socials.map((media, i) => {
        return <Link href={media.path} key={i} className="w-6 h-6 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-primary hover:text-white hover:transition-all duration-500" target="_blank" >{media.icon}</Link>
      })
    }</div>
  )
}
export default FooterSocialMedia;