// Shallow copy
const original = { language: 'JavaScript', details: { year: 1995 } };
const shallowCopy = { ...original };
shallowCopy.details.year = 2023;

console.log(original.details.year); // 2023 (unexpected change)

// Deep copy
// -- Method 1--
const originalObj = { details: { year: 1995 } };
const deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.details.year = 2023;

console.log(originalObj.details.year); // 1995 (original remains unchanged)

// --Method 2--
const deepCopy2 = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = typeof obj[key] === 'object' ? deepCopy2(obj[key]) : obj[key];
        return acc;
    }, Array.isArray(obj) ? [] : {});
};