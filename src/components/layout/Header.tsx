"use client";

import Link from "next/link";
import Image from "next/image";
import useCartStore from "@/store/cartStore";

// ===== Assets ===== //
import CartIcon from "../../../public/icons/cart.svg";

const Header = () => {
  const totalItems = useCartStore((state) => state.totalItems());
  return (
    <header className="bg-[var(--light-grey)] py-5 px-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="text-[#585660] text-2xl leading-1">
          GamerShop
        </Link>
        <Link href="/cart" className="relative">
          {totalItems > 0 && (
            <span className="absolute w-[18px] h-[18px] bg-red-400 text-white rounded-full text-center text-xs/normal right-[-8px] top-[-8px]">
              {totalItems}
            </span>
          )}
          <Image src={CartIcon} alt="Cart" width={24} height={24}></Image>
        </Link>
      </div>
    </header>
  );
};

export default Header;
