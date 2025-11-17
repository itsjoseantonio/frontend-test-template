"use client";

import React, { useEffect } from "react";
import useCartStore from "@/store/cartStore";

// ===== Components ===== //
import GameCard from "./GameCard";
import Button from "../ui/Button";

import { Game } from "@/utils/endpoint";
import useFetchGames from "@/hooks/useFetchGames";

interface CatalogGamesProps {
  games: Game[];
  currentPage: number;
  totalPages: number;
}
const CatalogGames = ({
  games,
  currentPage,
  totalPages,
}: CatalogGamesProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const cart = useCartStore((state) => state.cart);
  const { listGames, setListGames, getMoreGames } = useFetchGames(
    games,
    currentPage
  );

  useEffect(() => {
    setListGames(games);
  }, [games]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-16 mb-8">
        {listGames?.map((game) => {
          const isAdded = cart.some((item) => item.id == game.id);

          return (
            <GameCard
              key={game.id}
              {...game}
              addCart={() => addItem(game)}
              isAdded={isAdded}
              removeCart={() => removeItem(game.id)}
            />
          );
        })}
      </div>
      {currentPage < totalPages && (
        <Button onClick={getMoreGames} className="max-w-[140px]">
          SEE MORE
        </Button>
      )}
    </div>
  );
};

export default CatalogGames;
