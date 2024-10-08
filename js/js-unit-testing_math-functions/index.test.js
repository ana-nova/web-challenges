import { add, subtract, multiply, divide } from "./index.js";

test("add two numbers and return their sum", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});

test("substract two numbers and return their result", () => {
    const result = subtract(4, 2);
    expect(result).toBe(2);
});

test("multiply two numbers and return their result", () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
});

test("divide two numbers and return their result", () => {
    const result = divide(6, 2);
    expect(result).toBe(3);
});
