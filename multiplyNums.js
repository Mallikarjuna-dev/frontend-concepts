function multiply(a, b) {
    return a * b;
}

function mulNums(n1, n2) {
    return multiply.apply(null, [n1, n2])
}

console.log(mulNums(2, 4))
