"use client";

import { Game } from "@/utils/endpoint";
import Button from "./ui/Button";

const GameCard = () => {
  return (
    <div className="border border-[#8F8F8F] rounded-xl p-4 flex flex-col gap-4">
      <div className="relative rounded-t-xl">
        <img
          src="/game-images/cyberpunk2077.jpeg"
          alt="awd"
          className="rounded-t-xl w-full max-h-[240px]"
        />
        <span className="absolute left-2 top-2 py-1 px-2 bg-[#F5F5F4] text-base/tight rounded-md">
          New
        </span>
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

export default GameCard;
