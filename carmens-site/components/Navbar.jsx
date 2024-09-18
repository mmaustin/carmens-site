'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "uptown menace",
    path: '/uptown'
  },
  {
    name: "turning back time",
    path: '/turning'
  },
  {
    name: "abuelita & the magic stove",
    path: '/abuelita'
  },
  {
    name: "about carmen",
    path: '/about'
  }
];

const Navbar = () => {

  const pathName = usePathname();

  return (
    <div className="flex flex-col justify-center items-center w-full rounded-full backdrop-blur-xl">
      <h1 className="mb-8">
        <Link href={'/'} className="text-2xl font-serif uppercase" >carmen noboa espinal</Link>
      </h1>
      <nav className="flex gap-8">
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.path} className={`${link.path === pathName && " text-sky-700 text-xs no-underline font-light"} uppercase hover:text-sky-700 text-xs text font-light`}>{link.name}</Link>
          )
        })}
      </nav>
    </div>
  )
}
export default Navbar;
