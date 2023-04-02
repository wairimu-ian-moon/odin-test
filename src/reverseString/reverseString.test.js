const { reverseString } = require("./reverseString")

test("reversing string moon = noom", () => {
    const reverse = reverseString("moon")
    expect(reverse).toMatch(/^noom$/)
})
test("reversing name ian to nai", () => {
    const reverseName = reverseString("ian")
    expect(reverseName).toMatch(/^nai$/)
})