"use client";

import React, { useEffect } from "react";
import useCartStore from "@/store/cartStore";

// ===== Components ===== //
import GameCard from "./GameCard";
import Button from "../ui/Button";

import { Game } from "@/utils/endpoint";
import useFetchGames from "@/hooks/useFetchGames";

interface CatalogGamesClientProps {
  games: Game[];
  currentPage: number;
  totalPages: number;
}
const CatalogGamesClient = ({
  games,
  currentPage,
  totalPages,
}: CatalogGamesClientProps) => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mb-8 md:mb-12">
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

export default CatalogGamesClient;
