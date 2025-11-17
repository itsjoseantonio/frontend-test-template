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
        <div className="py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Back} alt="Back" />
            Back to Catalog
          </Link>
        </div>
        <div>
          <CartClient />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
