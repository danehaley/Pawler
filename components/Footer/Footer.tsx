import { CallContext } from "../../contexts/CallContext";
import Image from "next/image";
import logo from "../../public/logo_black.svg";
import Link from "next/link";

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  const context = CallContext();
  return (
    <footer className={`bottom-0 z-50 bg-zinc-50/80 shadow-topMd`}>
      <nav className="container flex items-center py-1 m-auto">
        <div className="pt-2"></div>
        <div className="py-2">
          <div className="pl-1 pb-1 w-10">
            <Image
              src={logo}
              height="30"
              width="30"
              priority={true}
              layout="responsive"
              objectFit="cover"
              className="filter brightness-200 h-100 align-bottom"
            />
          </div>
          <h1 className="text-xs font-bold pl-1">{context.appName}</h1>
          <h3 className="text-xxs font-bold pl-1">
            Copyright © {context.appYear} {context.createdBy}
          </h3>
          <h3 className="text-xxs font-bold pl-1">
            Contact at{" "}
            <a
              className="hover:underline"
              href={`mailto:${context.createdByEmail}`}
            >
              {context.createdByEmail}
            </a>
          </h3>
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-3 uppercase text-xs mt-1.5 text-black">
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500 ml-6"></li>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500"></li>
          <li className="pt-1.5 cursor-pointer hover:text-zinc-500"></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
