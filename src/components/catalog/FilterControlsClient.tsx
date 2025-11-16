"use client";

import { useSearchParams, useRouter } from "next/navigation";

// ===== Components ===== //
import FilterControls from "./FilterControls";

const FilterControlsClient = ({ filters }: { filters: string[] }) => {
  const params = useSearchParams();
  const router = useRouter();

  const handleFilter = (value: string) => {
    const currentParams = new URLSearchParams(params.toString());
    currentParams.set("genre", value);
    router.push(`?${currentParams}`);
  };

  return (
    <FilterControls
      label="Genre"
      id="genre"
      name="genre"
      options={filters}
      handleChange={handleFilter}
    />
  );
};

export default FilterControlsClient;
