import { screen, render } from "@testing-library/react";
import Todo from "./Todo";

test("renders a todo", () => {
    const todo = {
        text: "do a todo",
        done: false,
    };
    render(<Todo todo={todo} />);
    expect(screen.getByText("do a todo")).toBeInTheDocument();
});