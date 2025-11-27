//SOLID

class Order {
    constructor(items) {
      this.items = items;
    }
  
    calculateTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  }
  
  class OrderRepository {
    save(order) {
      console.log("Pedido salvo no banco de dados:", order);
    }
  }
  
  class EmailService {
    sendConfirmation(order) {
      console.log("E-mail de confirmação enviado para o pedido:", order);
    }
  }
  
  const items = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 100 },
    { name: "Monitor", price: 800 }
  ];
  
  const order = new Order(items);
  const repository = new OrderRepository();
  const emailService = new EmailService();
  
  const total = order.calculateTotal();
  
  console.log("Total calculado do pedido:", total);
  
  repository.save(order);
  
  emailService.sendConfirmation(order);