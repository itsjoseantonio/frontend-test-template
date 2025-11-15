import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartCard from "@/components/CartCard";
import OrderSummary from "@/components/OrderSummary";
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
          <div className="pt-6 pb-8">
            <h1 className="font-bold text-3xl mb-1">Your Cart</h1>
            <div>
              <p>3 items</p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_auto] gap-16">
            <div>
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
            <div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
