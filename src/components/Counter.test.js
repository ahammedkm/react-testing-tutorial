
import { render, screen, fireEvent } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import Counter from "./Counter";

test("render counter successfully", ()=> {
    render(<Counter />);
    expect(screen.getByTestId("counter")).toBeInTheDocument();
});

test("render increment button successfully", ()=> {
    render(<Counter />);
    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
});

test("test increment button click event", ()=> {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("counter")).toHaveTextContent(1);
});

test("test decrement button click event", ()=> {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("increment-button"));
    fireEvent.click(screen.getByTestId("increment-button"));
    fireEvent.click(screen.getByTestId("decrement-button"));
    expect(screen.getByTestId("counter")).toHaveTextContent(1);
});