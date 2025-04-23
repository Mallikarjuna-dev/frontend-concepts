let original = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
};

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
};

let clone = deepClone(original);

clone.hobbies.push("coding");

console.log(original);

console.log(clone);