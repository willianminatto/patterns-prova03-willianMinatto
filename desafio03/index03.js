//GRASP
class OrderItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Order {
    constructor() {
      this.items = [];
    }
  
    addItem(name, price) {
      const item = new OrderItem(name, price);
      this.items.push(item);
    }
  }
  
  const order = new Order();
  
  order.addItem("Mouse", 50);
  order.addItem("Teclado", 100);
  order.addItem("Monitor", 800);
  
  console.log("Itens do pedido:", order.items);
  
  order.items.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.name} - R$ ${item.price}`);
  });