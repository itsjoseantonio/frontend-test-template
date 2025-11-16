"use client";

import { useSearchParams, useRouter } from "next/navigation";

// ===== Components ===== //
import FilterControls from "./FilterControls";

const FilterControlsClient = ({ filters }: { filters: string[] }) => {
  const params = useSearchParams();
  const router = useRouter();
  const currentParams = new URLSearchParams(params.toString());
  const genre = currentParams.get("genre");

  const handleFilter = (value: string) => {
    currentParams.set("genre", value);
    router.push(`?${currentParams}`);
  };

  return (
    <FilterControls
      label="Genre"
      id="genre"
      name="genre"
      defaultValue={genre || "All"}
      options={filters}
      handleChange={handleFilter}
    />
  );
};

export default FilterControlsClient;
