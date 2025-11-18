import axios from "axios";

const fetchGames = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};

export default fetchGames;
