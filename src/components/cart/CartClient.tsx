"use client";
import useCartStore from "@/store/cartStore";

// ===== Components ===== //
import CartCard from "@/components/cart/CartCard";
import OrderSummary from "@/components/cart/OrderSummary";

const CartClient = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <>
      <div className="pt-6 pb-8">
        <h1 className="font-bold text-3xl mb-1">Your Cart</h1>
        <div>
          <p>{totalItems} items</p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_auto] gap-16">
        <div>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              removeCart={() => removeItem(item.id)}
            />
          ))}
        </div>
        <div>
          <OrderSummary cartItems={cart} totalItems={totalItems} />
        </div>
      </div>
    </>
  );
};

export default CartClient;
