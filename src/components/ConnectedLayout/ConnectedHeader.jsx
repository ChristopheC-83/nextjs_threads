"use client";

import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import Image from "next/image";

export default function ConnectedHeader() {
  // on récupère notre adresse actuelle
  const pathname = usePathname();
  return (
    <header className="relative flex items-center justify-between p-7">
      <Image src="/logo.png" alt="threads" width={40} height={40} />
      <nav className="absolute inset-0 flex items-center justify-center gap-4 py-4 ">
        <Link href="/">
          <PiHouseFill
            className={`w-14 h-14 transition duration-200 text-threads-gray-light hover:text-white hover:bg-neutral-800 p-1 rounded-xl ${
              pathname == "/" && "text-white"
            }`}
          />
        </Link>
        <Link href="/search">
          <IoSearch
            className={`w-14 h-14 transition duration-200 text-threads-gray-light hover:text-white hover:bg-neutral-800 p-1   rounded-xl ${
              pathname == "/search" && "text-white"
            }`}
          />
        </Link>
      </nav>
      <div>
        <Button withoutMarginTop>Se connecter</Button>
      </div>
    </header>
  );
}
