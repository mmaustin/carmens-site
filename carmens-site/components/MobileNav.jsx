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
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-500" />
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
        <ScrollArea className="h-32 w-48 rounded-md border border-green-500 mt-10">
          <nav className="mt-2 flex flex-col justify-center items-center gap-8">
            {links.map((link, i) => {
              return (
                <SheetClose key={i} asChild>
                  <Link key={i} href={link.path} className={`${link.path === pathName && "text-green-500 border-b-2 border-green-500"} text-xl capitalize hover:text-green-500 transition-all`}>{link.name}</Link>
                </SheetClose>
              )
            })}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav;