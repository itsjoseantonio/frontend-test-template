"use client";

import { Game } from "@/utils/endpoint";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

const ProductCard = () => {
  return (
    <div className="border border-[#8F8F8F] rounded-xl p-4 flex flex-col gap-4">
      <div className="relative rounded-t-xl">
        <img
          src="/game-images/cyberpunk2077.jpeg"
          alt="awd"
          className="rounded-t-xl w-full max-h-[240px]"
        />
        <Badge className="absolute left-2 top-2">New</Badge>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#737373]">GENRE</span>
        <div className="flex justify-between font-bold">
          <h3>Product name</h3>
          <p>$ 119</p>
        </div>
        <Button onClick={() => console.log("raaaaa")} variant="outline">
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
