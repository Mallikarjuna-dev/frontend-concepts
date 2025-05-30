const products = [
    { name: "Laptop", price: 12200 },
    { name: "Mouse", price: 120 },
    { name: "Keyboard", price: 800 },
    { name: "Radio", price: 450 }
]

function processProducts(products) {
    const productNamas = products.map(prod => prod.name);

    products.forEach(prod => {
        if (prod.price > 50) {
            console.log(`${prod.name} is above $50`);
        } else {
            console.log(`${prod.name} is below $50`);
        }
    });
    return productNamas;
}

processProducts(products);