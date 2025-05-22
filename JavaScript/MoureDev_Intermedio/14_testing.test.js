const sum = require('./13_testing')

test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3, 5)).toBe(8)
})

test("Suma de 3 + 3 tiene que ser 6", () => {
    expect(sum(3, 4)).toBe(6)
})