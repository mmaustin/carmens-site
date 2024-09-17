'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "books",
    path: '/books'
  },
  {
    name: "about",
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
            <Link key={i} href={link.path} className={`${link.path === pathName && " text-sky-700 text-sm no-underline font-light"} capitalize hover:text-sky-700 text-sm text font-light`}>{link.name}</Link>
          )
        })}
      </nav>
    </div>
  )
}
export default Navbar;
