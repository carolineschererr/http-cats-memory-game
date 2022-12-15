import { render } from "@testing-library/react";

describe("Timer", () => {
    // testa se elemento timer está na página
    test("timer class should exist in the document ", () => {
        render(<login />);

        const counterTitle = screen.getByText('timer');
        expect(counterTitle).toHaveClass("timer");
    });
});

describe("Player", () => {
    // testa se elemento player está na página
    test("player class should exist in the document ", () => {
        render(<login />);

        const counterTitle = screen.getByText('player');
        expect(counterTitle).toHaveClass("player");
    });
});