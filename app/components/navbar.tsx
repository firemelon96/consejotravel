"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { navLinks } from "../data/navlinks";
import { useMedia } from "react-use";

const Navbar = () => {
  const isMobile = useMedia("(min-width: 430px)", false);
  const [isOpen, setIsOpen] = useState(isMobile);

  return (
    <header className="relative z-9999">
      <div className="fixed top-0 left-0 z-10 w-full bg-orange-400">
        <div className="container mx-auto flex items-center justify-between xl:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="p-2 md:p-0">
              <Image
                width={80}
                height={80}
                src="/logo-corsejo.jpeg"
                alt="consejo travel logo"
                className="rounded-md bg-white"
              />
            </Link>
            <div className="text-white">
              <p className="text-lg font-semibold uppercase xl:text-3xl">
                consejo
              </p>
              <p className="text-base font-normal tracking-widest xl:text-2xl">
                Travel and Tours
              </p>
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="font-base flex text-lg text-white uppercase">
              {navLinks.map((nav) => (
                <li
                  key={nav.label}
                  className="hover:bg-primary p-6 uppercase hover:bg-white/30"
                >
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* mobile navigation */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-center md:hidden"
          >
            <BiMenu className="fill-sky-50 text-5xl" />
          </button>

          {isOpen && (
            <ul className="absolute top-20 left-0 w-full items-center bg-orange-400/75 text-center text-2xl tracking-widest text-sky-50 backdrop-blur-xs">
              {navLinks.map((nav) => (
                <li key={nav.label} className="p-6 uppercase hover:bg-white/30">
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
