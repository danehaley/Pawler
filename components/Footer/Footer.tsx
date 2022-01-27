import { CallContext } from "../../contexts/CallContext";
import Image from "next/image";
import logo from "../../public/logo.png";

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  const context = CallContext();
  return (
    <footer className={`bottom-0 z-50 bg-zinc-50/100`}>
      <nav className="container flex items-center py-1 m-auto">
        <div className="py-1">
          <Image src={logo} height="50" width="50" priority={true} />
        </div>
        <div className="py-2">
          <h1 className="text-md font-bold pl-1">{context.appName}</h1>
          <h3 className="text-xxs font-bold pl-1">
            Created by {context.createdBy}
          </h3>
          <h3 className="text-xxs font-bold pl-1">
            Contact - {context.createdByEmail}
          </h3>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
