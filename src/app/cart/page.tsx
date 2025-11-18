import Link from "next/link";
import Image from "next/image";

// ===== Components ===== //
import CartClient from "@/components/cart/CartClient";

// ===== Assets ===== //
import Back from "../../../public/icons/back-arrow.svg";

const CartPage = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-4 px-4 xl:px-0 md:py-6">
          <Link href="/" className="flex items-center gap-2 text-base">
            <Image src={Back} alt="Back" />
            Back to Catalog
          </Link>
        </div>
        <div className="px-4">
          <CartClient />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
