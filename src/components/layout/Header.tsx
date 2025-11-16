import Link from "next/link";
import Image from "next/image";

// ===== Assets ===== //
import CartIcon from "../../../public/icons/cart.svg";

const Header = () => {
  return (
    <header className="bg-[var(--light-grey)] py-5 px-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="text-[#585660] text-2xl leading-1">
          GamerShop
        </Link>
        <Link href="/cart">
          <Image src={CartIcon} alt="Cart" width={24} height={24}></Image>
        </Link>
      </div>
    </header>
  );
};

export default Header;
