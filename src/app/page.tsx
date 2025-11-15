import ProductCard from "@/components/ProductCard";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <div className="border-b-1 border-[#EFEDF3]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6 py-9">
            <h1 className="font-bold text-3xl">Top Sellers</h1>
            <div className="flex justify-end">
              <div className="flex items-center gap-5">
                <span className="font-bold border-r-1 text-lg/5 pr-4">
                  Genre
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
          <div className="grid grid-cols-3 gap-16">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
}
