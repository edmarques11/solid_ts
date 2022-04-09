import Item from "./Item";

export default abstract class TaxItem extends Item {
    public calculateTax(): number {
        return (this.getPrice() * this.getTax()) / 100;
    }

    abstract getTax(): number;
}