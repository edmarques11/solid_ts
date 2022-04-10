import MessageData from "./IMessageData";
import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
    private items: Item[];
    private messageData: MessageData;

    constructor(messageData: MessageData) {
        this.items = [];
        this.messageData = messageData;
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public getTaxes(): number {
        let taxes = 0;

        this.items.forEach((item) => {
            if (item instanceof TaxItem) {
                taxes += item.calculateTax();
            }
        });

        return taxes;
    }

    public getTotal(): number {
        let total = 0;
        this.items.forEach((item) => {
            total += item.getPrice();
        });

        return total;
    }

    public async printMessage(language: string): Promise<string> {
        let message = await this.messageData.read(language)
        return message
            .replace(/\{total\}/, this.getTotal().toString())
            .replace(/\{taxes\}/, this.getTaxes().toString());
    }
}
