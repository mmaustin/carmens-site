'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
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

const MobileNav = () => {

  const pathName = usePathname();

  return (
    <Sheet>
      <div className="w-full flex flex-row justify-around items-center">
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-sky-700" />
        </SheetTrigger>
        <SheetContent className="flex items-center flex-col mt-20">
          <SheetTitle >
            <VisuallyHidden.Root>
              Mobile Menu Title
            </VisuallyHidden.Root>
          </SheetTitle>
          <SheetDescription >
            <VisuallyHidden.Root>
              Mobile Menu Description
            </VisuallyHidden.Root>
          </SheetDescription>
          {/* <ScrollArea className="h-32 w-48 rounded-md border border-sky-700 mt-10"> */}
          <nav className="mt-2 flex flex-col justify-center items-center gap-8">
            {links.map((link, i) => {
              return (
                <SheetClose key={i} asChild>
                  <Link key={i} href={link.path} className={`${link.path === pathName && "text-sky-700 border-b-2 border-sky-700"} text-xl capitalize hover:text-sky-700 transition-all`}>{link.name}</Link>
                </SheetClose>
              )
            })}
          </nav>
          {/* </ScrollArea> */}
        </SheetContent>
        <h1 className="text-2xl font-serif uppercase">Carmen N.E.</h1>
      </div>
    </Sheet>
  )
}
export default MobileNav;