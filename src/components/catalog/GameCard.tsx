"use client";

// ===== Components ===== //
import Button from "../ui/Button";
import Badge from "../ui/Badge";

import { Game } from "@/utils/endpoint";

interface GameCardProps extends Game {
  addCart: () => void;
  isAdded: boolean;
  removeCart: () => void;
}

const GameCard = ({
  name,
  image,
  genre,
  isNew,
  price,
  addCart,
  isAdded,
  removeCart,
}: GameCardProps) => {
  return (
    <div className="border border-[#8F8F8F] rounded-xl p-4 flex flex-col gap-4">
      <div className="relative rounded-t-xl">
        <img
          src={image}
          alt="awd"
          className="rounded-t-xl w-full max-h-[240px]"
        />
        {isNew && <Badge className="absolute left-2 top-2">New</Badge>}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#737373]">{genre}</span>
        <div className="flex justify-between font-bold gap-2">
          <h3 className="truncate">{name}</h3>
          <p>{`$${price}`}</p>
        </div>
        <Button
          onClick={isAdded ? removeCart : addCart}
          variant="outline"
          className="font-bold"
        >
          {isAdded ? "REMOVE" : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
