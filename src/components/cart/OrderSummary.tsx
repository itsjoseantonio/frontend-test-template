"use client";

// ===== Components ===== //
import Button from "../ui/Button";

interface OrderSummary {
  cartItems: any[];
}

const CartItem = ({ name, price }: { name: string; price: string }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p>{name}</p>
      <span>$ {price}</span>
    </div>
  );
};

const OrderSummary = ({ cartItems }: OrderSummary) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="border border-[#8F8F8F] rounded-lg px-5 pt-6 pb-10">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">Order Summary</h3>
          <span>3 items</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <CartItem name="Product name" price="00.00" />
          </div>
        </div>
        <hr className="border-t-1 border-[#8F8F8F] my-3" />
        <div className="font-bold flex justify-between items-center">
          <p>Order Total</p>
          <span>$ 00.00</span>
        </div>
      </div>
      <Button onClick={() => {}}>Checkout</Button>
    </div>
  );
};

export default OrderSummary;
