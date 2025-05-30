const catogory = [
    "electronics",
    "clothing",
    "electronics",
    "toys",
    "clothing",
    "toys", "toys"
];

const reduced = catogory.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc
}, {});

const sorted = Object.entries(reduced).sort((a, b) => b[1] - a[1]).map(ele => ele[0])

console.log(reduced);
console.log(sorted)