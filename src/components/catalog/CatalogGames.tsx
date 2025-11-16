"use client";

import React, { useState, useEffect } from "react";

// ===== Components ===== //
import GameCard from "./GameCard";
import Button from "../ui/Button";

import { Game } from "@/utils/endpoint";
import fetchGames from "@/services/product.service";
import { config } from "@/config/config";
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
        {listGames?.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
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
