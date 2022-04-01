"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getTaxes() {
        let taxes = 0;
        this.items.forEach(item => {
            taxes += item.calculateTax();
        });
        return taxes;
    }
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.getPrice();
        });
        return total;
    }
}
exports.default = Order;
