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
    <div className="flex justify-around w-full border">
      <h3>
        <Link href={'/'} className="text-3xl text-green-500 border capitalize" >CARMEN e</Link>
      </h3>
      <nav className="flex gap-8 border">
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.path} className={`${link.path === pathName && " text-green-500 border-b-2 border-accent"} capitalize font-medium hoover:text-accent`}>{link.name}</Link>
          )
        })}
      </nav>
    </div>
  )
}
export default Navbar;
