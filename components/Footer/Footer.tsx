import { CallContext } from "../../contexts/CallContext";
import Image from "next/image";
import logo from "../../public/logo.png";

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  const context = CallContext();
  return (
    <div className={`${className} grid grid-cols-8 bottom-0`}>
      <div className="col-start-2 flex items-center">
        <Image
          className="shrink-0"
          src={logo}
          height="50"
          width="50"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Footer;
