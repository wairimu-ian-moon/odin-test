const { analyzeArray } = require("./analyzeArray")

test("testing an array that will return object == average: 4, min: 1, max: 8, length: 6", () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 })
});


test('test a different array that will return a different result', () => {
    const object = analyzeArray([1, 2, 3, 4, 5])
    expect(object).toEqual({ average: 3, min: 1, max: 5, length: 5 })
})