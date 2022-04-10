import Beer from "./Beer";
import MessageDataFile from "./MessageDataFile";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve criar um pedido e calcular o total", function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));

    const total = order.getTotal();

    expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10)); // 10%
    order.addItem(new Whisky("Jack Daniels", 100)); // 20%
    order.addItem(new Water("Crystal", 1)); // Isenta

    const taxes = order.getTaxes();

    expect(taxes).toBe(21);
});

test("Deve criar um pedido e imprimir uma mensagem em português", async function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10)); // 10%
    order.addItem(new Whisky("Jack Daniels", 100)); // 20%
    order.addItem(new Water("Crystal", 1)); // Isenta

    const message = await order.printMessage("pt");

    expect(message).toBe(
        `O total foi de R$ ${order.getTotal()}, os impostos foram R$ ${order.getTaxes()}. Obrigado pelo seu pedido!`
    );
});

test("Deve criar um pedido e imprimir uma mensagem em inglês", async function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Beer("Brahma", 10)); // 10%
    order.addItem(new Whisky("Jack Daniels", 100)); // 20%
    order.addItem(new Water("Crystal", 1)); // Isenta

    const message = await order.printMessage("en");

    expect(message).toBe(
        `The total was R$ ${order.getTotal()}, the taxes was R$ ${order.getTaxes()}. Thanks for your order!`
    );
});
