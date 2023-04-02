const { calculator } = require("./calculator");

test("testing the calculator addition method", () => {
    const addition = calculator.add(1, 2)
    expect(addition).toBe(3)
})
test("testing the calculator addition to not equal", () => {
    const addition = calculator.add(1, 2)
    expect(addition).not.toBe(4)
})
test("testing the calculator subtraction method", () => {
    const subtract = calculator.subtract(4, 1)
    expect(subtract).toBe(3)
})
test("testing the calculator division method", () => {
    const division = calculator.divide(10, 5)
    expect(division).toBe(2)
})
test("testing the calculator multiplication method", () => {
    const multiply = calculator.multiply(2, 4)
    expect(multiply).toBe(8)
})