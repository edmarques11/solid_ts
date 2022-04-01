import Item from "./Item";

export default class Order {
    private items: Item[];

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public getTaxes(): number {
        let taxes = 0;

        this.items.forEach(item => {
            taxes += item.calculateTax();
        });

        return taxes;
    }

    public getTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += item.getPrice();
        });

        return total;
    }
}