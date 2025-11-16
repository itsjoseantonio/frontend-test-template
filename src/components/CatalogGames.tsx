"use client";

import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { Game } from "@/utils/endpoint";

interface CatalogGamesProps {
  games: Game[];
}
const CatalogGames = ({ games }: CatalogGamesProps) => {
  const [listGames, setListGames] = useState<Game[] | null>(games);
  console.log(listGames, "ListGames");
  return (
    <div className="grid grid-cols-3 gap-16">
      {listGames?.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
};

export default CatalogGames;
