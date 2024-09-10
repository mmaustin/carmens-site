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
    <nav className="flex gap-8">
      {links.map((link, i) => {
        return (
          <Link key={i} href={link.path} className={`${link.path === pathName && " text-green-500 border-b-2 border-accent"} capitalize font-medium hoover:text-accent`}>{link.name}</Link>
        )
      })}
    </nav>
  )
}
export default Navbar;
