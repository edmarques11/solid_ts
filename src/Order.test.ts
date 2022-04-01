import Beer from "./Beer";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve criar um pedido e calcular o total", function () {
    const order = new Order();
    order.addItem(new Beer("Brahma", 10));
    order.addItem(new Whisky("Jack Daniels", 100));
    order.addItem(new Water("Crystal", 1));

    const total = order.getTotal();

    expect(total).toBe(111);
})

test("Deve criar um pedido e calcular os impostos", function () {
    const order = new Order();
    order.addItem(new Beer("Brahma", 10)); // 10%
    order.addItem(new Whisky("Jack Daniels", 100)); // 20%
    order.addItem(new Water("Crystal", 1)); // Isenta

    const taxes = order.getTaxes();

    expect(taxes).toBe(21);
})