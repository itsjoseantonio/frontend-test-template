import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import GameCard from "./GameCard";

const GameCardProps = {
  name: "Mario bros",
  genre: "Adventure",
  price: 99,
  image:
    "https://fastly.picsum.photos/id/659/200/300.jpg?hmac=cmMJe403Rt0WMoriAFlgDaHI4FkwevCOXFyhnelzolY",
  addCart: vi.fn(),
  removeCart: vi.fn(),
  isNew: false,
  id: "1001",
  isAdded: false,
  description: "Description game",
};

describe("GameCard Component", () => {
  it("Render with correct props", () => {
    render(<GameCard {...GameCardProps} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", GameCardProps.image);
  });

  it("handle click event", async () => {
    const user = userEvent.setup();

    render(<GameCard {...GameCardProps} />);

    const button = screen.getAllByText("ADD TO CART");
    await user.click(button[0]);

    expect(GameCardProps.addCart).toHaveBeenCalledOnce();
  });

  it("Render 'REMOVE' text when Item is added", async () => {
    render(<GameCard {...GameCardProps} isAdded={true} />);

    const button = screen.getByText("REMOVE");

    expect(button).toBeInTheDocument();
  });
});
