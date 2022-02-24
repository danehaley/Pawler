import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { CallContext } from "../../contexts/CallContext";

type HeaderProps = {
  className: string;
};

const Header = ({ className }: HeaderProps) => {
  const context = CallContext();
  return (
    <header className={`${className} bg-zinc-50/80 shadow`}>
      <nav className="container flex items-center py-2 justify-center m-auto">
        <div className="py-1 cursor-pointer flex">
          <Link href="/" passHref>
            <Image
              src={logo}
              height="50"
              width="50"
              priority={true}
              alt="Welcome to Pawler!"
              className="cursor-pointer"
            />
          </Link>
          <Link href="/" passHref>
            <h1 className="text-3xl font-bold cursor- mt-2 ml-2">
              {context.appName}
            </h1>
          </Link>
        </div>
        <ul className="hidden sm:flex flex-1 justify-start items-center gap-3 uppercase text-xs mt-0.5 text-black">
          <Link href="/search" passHref>
            <li className="pt-1.5 cursor-pointer hover:text-zinc-500 ml-6">
              Search
            </li>
          </Link>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500">
            Questionaire
          </li>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500">About</li>
        </ul>
        <ul className="hidden sm:flex flex-1 justify-end items-center text-black gap-3 text-xs">
          <Link href="/login" passHref>
            <li className="cursor-pointer uppercase text-black py-2 hover:text-zinc-500">
              Login
            </li>
          </Link>
          <Link href="/register" passHref>
            <li className="cursor-pointer uppercase text-black py-2 hover:text-zinc-500">
              Register
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
