import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/constants.index";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src="/images/header-logo.svg"
            width={130}
            height={29}
            alt="Nike Logo"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image
            src="/icons/hamburger.svg"
            alt="Hamburger Menu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
