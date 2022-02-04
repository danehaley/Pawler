import Image from "next/image";
import Link from "next/link";

// Context Import
import { CallContext } from "../../contexts/CallContext";

// SVG Import
import logo from "../../public/logo_black.svg";
import twitterLogo from "../../public/twitter.svg";
import instagramLogo from "../../public/instagram.svg";
import facebookLogo from "../../public/facebook.svg";

const socialMediaLogos = [
  ["twitter", twitterLogo, "https://twitter.com"],
  ["instagram", instagramLogo, "https://instagram.com"],
  ["facebook", facebookLogo, "https://facebook.com"],
];

const socialMediaLinks = () => {
  let res = [];
  for (let i = 0; i < socialMediaLogos.length; i++) {
    res.push(
      <li
        className="pt-1.5 cursor-pointer hover:text-zinc-500"
        key={socialMediaLogos[i][0]}
      >
        <Link href={socialMediaLogos[i][2]}>
          <Image
            src={socialMediaLogos[i][1]}
            height="25"
            width="25"
            className="filter brightness-200 hover:brightness-100"
          ></Image>
        </Link>
      </li>
    );
  }
  return res;
};

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  const context = CallContext();
  return (
    <footer
      className={`${className} bottom-0 z-50 bg-zinc-50/80 shadow-topMd pt-1`}
    >
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
          {socialMediaLinks()}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
