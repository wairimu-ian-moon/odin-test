const { capitalize } = require("./capitalize");

test("testing capitalizing the first word of a text", () => {
    const name = capitalize("moon")
    expect(name).toMatch(/^Moon$/)
})
test("name to be Name", () => {
    const name = capitalize("name")
    expect(name).toMatch(/^Name$/)
})
test("ian to be Ian", () => {
    const name = capitalize("ian")
    expect(name).toMatch(/^Ian$/)
})