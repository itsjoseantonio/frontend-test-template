import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import axios from "axios";
import useFetchGames from "./useFetchGames";

vi.mock("axios");

vi.mock("next/navigation", () => {
  return {
    useSearchParams: () => new URLSearchParams("genre=Action"),
  };
});

const initialGames = [{ id: "1", name: "Cyberpunk 2077" }];
const newGames = [{ id: "2", name: "The Witcher 3: Wild Hunt" }];
const currentPage = 1;

describe("useFetchGames Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Initialize with initial states", () => {
    const { result } = renderHook(() =>
      useFetchGames(initialGames as any, currentPage)
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.listGames).toEqual(initialGames);
  });

  it("fetch more games data", async () => {
    const { result } = renderHook(() =>
      useFetchGames(initialGames as any, currentPage)
    );

    vi.mocked(axios.get).mockResolvedValue({
      data: {
        games: newGames,
        currentPage: 2,
      },
    });

    await act(async () => {
      await result.current.getMoreGames();
    });

    expect(result.current.listGames).toEqual([...initialGames, ...newGames]);
  });
});
