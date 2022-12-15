import { render } from "@testing-library/react";

describe("Button Component", () => {
    // documento deve ter botão de login
    test("login button should exist in the document ", () => {
        render(<login />);

        const counterTitle = screen.getByRole('button');
        expect(counterTitle).toBeInTheDocument;
    });


    // ao carregar página, botão deve estar desabilitado
    test(".login__button:disabled class should exist in the document ", () => {
        render(<login />);

        const counterTitle = screen.getByRole('button');
        expect(counterTitle).toHaveClass(".login__button:disabled");
    });
});