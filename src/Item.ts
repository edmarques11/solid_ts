export default abstract class Item {
    private category: string;
    private description: string;
    private price: number;

    constructor(category: string, description: string, price: number) {
        this.category = category;
        this.description = description;
        this.price = price;
    }

    public getCategory(): string {
        return this.category;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }
}
