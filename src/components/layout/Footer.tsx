import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/images/ApplyDigital-Logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[var(--dark-grey)] py-12">
      <Link href="/">
        <Image src={Logo} alt="Apply Digital"></Image>
      </Link>
    </footer>
  );
};

export default Footer;
