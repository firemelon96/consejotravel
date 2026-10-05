import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="mt-16 flex max-h-188.75 w-full overflow-hidden bg-red-300">
      <div className="relative h-110 w-full">
        <Image
          unoptimized
          fill
          alt="Palawan island"
          src="https://cdn.palawanwebsolutions.com/clarkkent/hero.avif"
          className="w-full object-cover object-top"
          priority
        />

        <div className="absolute inset-y-0 left-5 flex items-center text-sky-50 sm:left-36 2xl:left-80">
          <div className="space-y-2">
            {/* <span className="text-orange-400 text-3xl">Let your</span> */}
            <h1 className="text-4xl font-semibold uppercase lg:text-7xl">
              Creating <span className="text-orange-400">Journey</span>
            </h1>
            <p className="text-3xl font-semibold uppercase lg:text-6xl">
              Worth <span className="text-orange-400">Remembering</span>.
            </p>
            {/* <p className="stroke-slate-500 stroke-1 text-xl font-semibold text-white">
              Experience budget friendly with quality tours and hussle free
            </p> */}

            <Link href="#tours">
              <button className="group mt-5 flex items-center rounded-full bg-orange-400 px-4 py-3 text-sm font-semibold tracking-wider">
                EXPLORE NOW{" "}
                <BiChevronRight className="ml-2 group-hover:animate-ping" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
