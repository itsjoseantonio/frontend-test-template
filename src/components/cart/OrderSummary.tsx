"use client";
import { Game } from "@/utils/endpoint";

// ===== Components ===== //
import Button from "../ui/Button";

interface OrderSummary {
  cartItems: Game[];
  totalItems: number;
}

const CartItem = ({ name, price }: { name: string; price: number }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p>{name}</p>
      <span>$ {price}</span>
    </div>
  );
};

const OrderSummary = ({ cartItems, totalItems }: OrderSummary) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="border border-[#8F8F8F] rounded-lg px-5 pt-6 pb-10">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">Order Summary</h3>
          <span>{totalItems} items</span>
        </div>
        <div className="flex flex-col gap-1">
          {cartItems.map((item) => (
            <CartItem name={item.name} price={item.price} key={item.id} />
          ))}
        </div>
        <hr className="border-t-1 border-[#8F8F8F] my-3" />
        <div className="font-bold flex justify-between items-center">
          <p>Order Total</p>
          <span>$ {total}</span>
        </div>
      </div>
      <Button onClick={() => {}}>Checkout</Button>
    </div>
  );
};

export default OrderSummary;
