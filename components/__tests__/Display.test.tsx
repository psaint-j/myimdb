import { render, screen, fireEvent } from "@testing-library/react";
import { SettingsContext } from "@/contexts/SettingsContext";
import { Display } from "../Display";
import { LightIcon, MoonIcon } from "@/components/Icons";
import { Span } from "next/dist/trace";

jest.mock("@/components/Icons", () => ({
  LightIcon: () => <div>LightIcon</div>,
  MoonIcon: () => <div>MoonIcon</div>,
}));

describe("Display Component", () => {
  const mockToggleDarkMode = jest.fn();

  const setup = (darkMode = false) => {
    return render(
      <SettingsContext.Provider
        value={{
          darkMode,
          toggleDarkMode: mockToggleDarkMode,
          displayMode: "grid",
          toggleDisplayMode: () => {},
        }}
      >
        <Display />
      </SettingsContext.Provider>
    );
  };

  it("renders with light mode initially", () => {
    setup();
    expect(screen.getByText("LightIcon")).toBeInTheDocument();
    expect(screen.getByText("MoonIcon")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("toggles dark mode on checkbox click", () => {
    setup();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockToggleDarkMode).toHaveBeenCalled();
  });

  it("displays correct icon based on dark mode", () => {
    setup(true);
    expect(screen.getByText("MoonIcon").closest("Span")).toHaveClass(
      "bg-blue-700 text-white"
    );
    expect(screen.getByText("LightIcon").closest("Span")).toHaveClass(
      "text-gray-900"
    );
  });

  it("displays correct icon based on light mode", () => {
    setup(false);
    expect(screen.getByText("LightIcon").closest("Span")).toHaveClass(
      "bg-blue-700 text-white"
    );
    expect(screen.getByText("MoonIcon").closest("Span")).toHaveClass(
      "text-gray-900"
    );
  });
});
