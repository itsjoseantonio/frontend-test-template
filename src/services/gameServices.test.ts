import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import fetchGames from "./product.service";

vi.mock("axios");

describe("Games API Call", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetch data successfully", async () => {
    const mockData = {
      games: [],
      availableFilters: [],
      totalPages: 3,
      currentPage: 1,
    };

    vi.mocked(axios.get).mockResolvedValue({ data: mockData });

    const response = await fetchGames("/api/games");

    expect(response).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith("/api/games");
  });
});
