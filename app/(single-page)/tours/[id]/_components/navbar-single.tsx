"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export const NavbarSingle = () => {
  const router = useRouter();

  return (
    <header className="relative z-9999">
      <div className="bg-orange fixed top-0 left-0 z-10 w-full">
        <div className="container mx-auto flex items-center justify-between xl:px-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="p-2 md:p-0">
              <Image
                width={80}
                height={80}
                src="https://cdn.palawanwebsolutions.com/clarkkent/logo.png"
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

          <div className="p-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 rounded-xs p-2 text-base text-sky-50 hover:bg-white/20"
            >
              {" "}
              <BsArrowLeft /> Go back
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
