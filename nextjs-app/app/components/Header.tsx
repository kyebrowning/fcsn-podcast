import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 text-white flex items-center">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-end gap-5">
          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
