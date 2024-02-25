import Grocery from "../Grocery";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("should load grocery", () =>{


    render(<Grocery/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

// test("should load button inside contact component",() =>{
//     render(<Grocery/>);

//     const button=screen.getByRole("button");
//     expect(button).toBeInTheDocument();
// });