"use client";
import useCartStore from "@/store/cartStore";

// ===== Components ===== //
import CartCard from "@/components/cart/CartCard";
import OrderSummary from "@/components/cart/OrderSummary";

const CartClient = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalItems = useCartStore((state) => state.totalItems());

  if (cart.length === 0) {
    return (
      <div className="py-16 text-center text-xl font-bold">
        <p>There are no products in your Cart</p>
      </div>
    );
  }

  return (
    <>
      <div className="py-6 md:py-12">
        <h1 className="font-bold text-2xl md:text-4xl mb-1">Your Cart</h1>
        <div>
          <p className="text-x md:text-2xl">{totalItems} items</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 pb-12">
        <div>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              removeCart={() => removeItem(item.id)}
            />
          ))}
        </div>
        <div className="min-w-auto md:min-w-[520px]">
          <OrderSummary cartItems={cart} totalItems={totalItems} />
        </div>
      </div>
    </>
  );
};

export default CartClient;
