import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoFull = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={46}
          height={44}
          className="-mr-2 rotate-180"
        />
        <p className="text-lg font-semibold">Vectra</p>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={46}
          height={44}
          className="-ml-2"
        />
      </div>
    </Link>
  );
};

export default LogoFull;
