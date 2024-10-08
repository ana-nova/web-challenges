import { add, subtract, multiply, divide } from "./index.js";

/* add: basic, less than, close to */
test("add two numbers and return their sum", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
    const result = add(-5, 3);
    expect(result).toBeLessThan(0);
  });

  test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });

//--------------------------------------


/* substract: basic, less than */
test("substract two numbers and return their result", () => {
    const result = subtract(15, 5);
    expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
    const result = subtract(5, 15);
    expect(result).toBeLessThan(0);
  });

//--------------------------------------

/* multiply: basic, return of negativ values */
test("multiply two numbers and return their result", () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
    const result = multiply(-2, 4);
    expect(result).toBeLessThan(0);
  });
  
test("returns a negative value if only the second argument is negative", () => {
    const result = multiply(2, -4);
    expect(result).toBeLessThan(0);
  });
  
test("returns a positive value if called with two negative arguments", () => {
    const result = multiply(-2, -4);
    expect(result).toBeGreaterThan(0);
  });


//--------------------------------------

/* divide: basic, dividing by 0 */
test("divide two numbers and return their result", () => {
    const result = divide(6, 2);
    expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
    const result = divide(9, 0);
    expect(result).toBe("You should not do this!");
  });