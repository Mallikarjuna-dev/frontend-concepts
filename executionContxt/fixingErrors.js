const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        let price = +(item.price);
        if (typeof price !== 'number' || isNaN(price)) {
            console.log("Invalid price.");
            return;
        }
        item.price = price;
        this.items.push(item);
        this.total += item.price;
    },

    getTotal() {
        return `Total: ${parseFloat(this.total).toFixed(2)}`;
    }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal());