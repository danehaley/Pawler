import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { CallContext } from "../../contexts/CallContext";

type HeaderProps = {
  className: string;
};

const Header = ({ className }: HeaderProps) => {
  const context = CallContext();
  return (
    <div
      className={`${className} grid grid-cols-8 h-18 bg-zinc-50/100 sticky top-0 z-50`}
    >
      <div className="col-start-2 flex items-center">
        <Image src={logo} height="75" width="75" priority={true} />
        <h1 className="m-auto text-3xl font-bold pr-3">{context.appName}</h1>
      </div>
      <div className="col-start-3 flex justify-around flex-row">
        <h3 className="m-auto pt-1.5">Dogs</h3>
        <h3 className="m-auto pt-1.5">Cats</h3>
        <h3 className="m-auto pt-1.5">Other</h3>
      </div>
    </div>
  );
};

export default Header;
