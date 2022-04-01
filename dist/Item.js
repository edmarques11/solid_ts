"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(category, description, price) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
    calculateTax() {
        return (this.getPrice() * this.getTax()) / 100;
    }
    getCategory() {
        return this.category;
    }
    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
}
exports.default = Item;
