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
      <nav className="container flex items-center py-1 justify-center m-auto">
        <div className="py-1 cursor-pointer">
          <Link href="/" passHref>
            <Image
              src={logo}
              height="75"
              width="75"
              priority={true}
              alt="Welcome to Pawler!"
            />
          </Link>
        </div>
        <h1 className="text-3xl font-bold pl-1 cursor-pointer">
          <Link href="/">{context.appName}</Link>
        </h1>
        <ul className="hidden sm:flex flex-1 justify-start items-center gap-3 uppercase text-xs mt-1.5 text-black">
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
        <ul className="hidden sm:flex flex-1 justify-end items-center text-black gap-2 text-xs">
          <Link href="/login" passHref>
            <button
              type="button"
              className="rounded-lg cursor-pointer uppercase bg-pawler-primary py-2 px-4 hover:bg-pawler-primaryHover drop-shadow-sm ring-1 ring-slate-900/5"
            >
              Login
            </button>
          </Link>
          <Link href="/register" passHref>
            <button
              type="button"
              className="rounded-lg cursor-pointer uppercase bg-pawler-primary py-2 px-4 hover:bg-pawler-primaryHover drop-shadow-sm ring-1 ring-slate-900/5"
            >
              Register
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
