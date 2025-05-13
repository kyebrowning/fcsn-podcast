"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  const HomeHeader = () => (
    <header className="fixed z-50 h-12 inset-0 text-white flex items-center">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-end gap-5">
          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              {/*<li>
                 <Link href="#" className="">
                  Resources
                </Link>
              </li> */}
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="">
                  Podcast
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

  const Header = () => (
    <header className="fixed z-50 h-12 inset-0 text-white flex items-center bg-opacity-90 bg-gray-900">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link href='/' >
            <Image 
              src='/images/fcsn-logo.svg'
              alt='FCSN Logo'
              width={25}
              height={25}
              objectFit="contain"

            />
          </Link>
          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              {/* <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Resources
                </Link>
              </li> */}
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="">
                  Podcast
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

  return pathname === "/" ? <HomeHeader /> : <Header />;
}
