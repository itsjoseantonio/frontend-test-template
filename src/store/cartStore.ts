import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Game } from "@/utils/endpoint";

interface CartStoreProps {
  cart: Game[];
  addItem: (item: Game) => void;
  removeItem: (id: string) => void;
  totalItems: () => number;
}

const useCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (item) => {
        set((state) => ({
          cart: [...state.cart, item],
        }));
      },
      removeItem: (id) => {
        const items = get().cart;
        const updatedItems = items.filter((item) => item.id != id);
        set((state) => ({ cart: updatedItems }));
      },
      totalItems: () => get().cart.length,
    }),
    { name: "cart" }
  )
);

export default useCartStore;
