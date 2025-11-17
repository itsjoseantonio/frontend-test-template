import { useState } from "react";
import { useSearchParams } from "next/navigation";

import fetchGames from "@/services/product.service";
import { config } from "@/config/config";
import { Game } from "@/utils/endpoint";

const baseUrl = `${config.apiURL}`;

const useFetchGames = (games: Game[], currentPage: number) => {
  const [listGames, setListGames] = useState<Game[]>(games);
  const [loading, setLoading] = useState<boolean>(false);
  const params = useSearchParams();

  const getMoreGames = async () => {
    const currentParams = new URLSearchParams(params.toString());
    setLoading(true);
    try {
      const res = await fetchGames(
        `${baseUrl}?page=${currentPage + 1}&${currentParams}`
      );
      setListGames((prev) => [...prev, ...res.games]);
    } catch (err) {
      console.log(err, "error");
    } finally {
      setLoading(false);
    }
  };

  return { listGames, loading, setListGames, getMoreGames };
};

export default useFetchGames;
