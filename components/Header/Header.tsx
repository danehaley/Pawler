import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { CallContext } from "../../contexts/CallContext";

type HeaderProps = {
  className: string;
};

const Header = ({ className }: HeaderProps) => {
  const context = CallContext();
  return (
    <header className={`${className} sticky top-0 z-50 bg-zinc-50/100`}>
      <nav className="container flex items-center py-1 justify-center m-auto">
        <div className="py-1">
          <Image src={logo} height="75" width="75" priority={true} />
        </div>
        <h1 className="text-3xl font-bold pl-1">{context.appName}</h1>
        <ul className="hidden sm:flex flex-1 justify-start items-center gap-3 uppercase text-xs mt-1.5 text-black">
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500 ml-6">
            Dogs
          </li>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500">Cats</li>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500">Other</li>
        </ul>
        <ul className="hidden sm:flex flex-1 justify-end items-center text-black gap-2 text-xs">
          <button
            type="button"
            className="rounded-md cursor-pointer uppercase bg-pawler-primary py-2 px-2 hover:bg-pawler-primaryHover"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-md cursor-pointer uppercase bg-pawler-primary py-2 px-2 hover:bg-pawler-primaryHover"
          >
            Register
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
