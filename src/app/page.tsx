import fetchGames from "@/services/product.service";
import { config } from "@/config/config";

// ===== Components ===== //
import CatalogGames from "@/components/catalog/CatalogGames";
import FilterControlsClient from "@/components/catalog/FilterControlsClient";

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
  const { games, availableFilters, totalPages, currentPage, error } =
    await getGames(baseURL);

  return (
    <main className="min-h-screen">
      <div className="border-b-1 border-[#EFEDF3]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6 py-9">
            <h1 className="font-bold text-3xl">Top Sellers</h1>
            <div className="flex justify-end">
              <FilterControlsClient filters={availableFilters} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-xl mx-auto py-12">
          {error && <p className="text-center">{error}</p>}
          <CatalogGames
            games={games}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
}
