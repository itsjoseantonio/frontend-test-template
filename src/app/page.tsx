import fetchGames from "@/services/product.service";
import { config } from "@/config/config";
import CatalogGames from "@/components/CatalogGames";

const getGames = async (url: string) => {
  try {
    const gameResponse = await fetchGames(url);
    return gameResponse;
  } catch (error) {
    return {
      error: "Fail load games",
    };
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const page = params.page ?? "1";
  const genre = params?.genre ?? "";
  const queryParams = new URLSearchParams({ genre, page });
  const baseURL = `${config.apiURL}?${queryParams}`;
  const { games, availableFilters, error } = await getGames(baseURL);

  return (
    <main className="min-h-screen">
      <div className="border-b-1 border-[#EFEDF3]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6 py-9">
            <h1 className="font-bold text-3xl">Top Sellers</h1>
            <div className="flex justify-end">
              <div className="flex items-center gap-5">
                <span className="font-bold border-r-1 text-lg/5 pr-4">
                  Genr e
                </span>
                <select
                  name="genre"
                  id="genre"
                  className="w-[200px] block p-1 border border-gray-200 rounded-md  focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="all">All</option>
                  <option value="all">All</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-xl mx-auto py-12">
          {error && <p className="text-center">{error}</p>}
          <CatalogGames games={games} />
        </div>
      </div>
    </main>
  );
}
