//SOLID
class DiscountStrategy {
    apply(price) {
      return price;
    }
  }
  
  class BlackFridayDiscount extends DiscountStrategy {
    apply(price) {
      return price * 0.5;
    }
  }
  
  class StudentDiscount extends DiscountStrategy {
    apply(price) {
      return price * 0.8;
    }
  }
  
  class PriceCalculator {
    constructor(discountStrategy) {
      this.discountStrategy = discountStrategy;
    }
  
    calculate(price) {
      return this.discountStrategy.apply(price);
    }
  }
  
  const originalPrice = 100;
  
  const bfCalculator = new PriceCalculator(new BlackFridayDiscount());
  console.log("Preço com Black Friday:", bfCalculator.calculate(originalPrice));
  
  const studentCalculator = new PriceCalculator(new StudentDiscount());
  console.log(
    "Preço com desconto Estudante:",
    studentCalculator.calculate(originalPrice)
  );
  
  const noDiscountCalculator = new PriceCalculator(new DiscountStrategy());
  console.log(
    "Preço sem desconto:",
    noDiscountCalculator.calculate(originalPrice)
  );