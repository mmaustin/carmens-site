'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";

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
    name: "abuelita . . . ",
    path: '/abuelita'
  },
  {
    name: "about carmen",
    path: '/about'
  }
];

const MobileNav = () => {

  const pathName = usePathname();

  return (
    <Sheet>
      <div className="w-full flex flex-row justify-around items-center">
        <h1 className="">
          <Link href={'/'} className="text-2xl text-red-600/100 font-serif capitalize" >carmen</Link>
        </h1>
        <SheetContent className="flex items-center flex-col ">
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
          <ScrollArea className="h-32 w-auto pb-2 rounded-md border-2 border-red-500/60">
            <nav className="mt-2 flex flex-col justify-center items-center gap-8">
              {links.map((link, i) => {
                return (
                  <SheetClose key={i} asChild>
                    <Link key={i} href={link.path} className={`${link.path === pathName && " text-red-500/100 text-xs no-underline font-light"} uppercase hover:text-red-500/60 text-xs mx-4 font-light`}>{link.name}</Link>
                  </SheetClose>
                )
              })}
            </nav>
          </ScrollArea>
        </SheetContent>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-red-500/60" />
        </SheetTrigger>
      </div>
    </Sheet>
  )
}
export default MobileNav;