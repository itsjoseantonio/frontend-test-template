import axios from "axios";
import { GamesResponse } from "@/utils/endpoint";

const fetchGames = async (url: string): Promise<GamesResponse> => {
  const response = await axios.get(url);
  return response.data;
};

export default fetchGames;
