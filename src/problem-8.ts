{
  // problem - 8
  class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    displayInfo(): any {
      console.log(
        `Your car model is: ${this.year} ${this.brand} ${this.model}`
      );
    }
  }
  const myCar = new Car("Toyota", "Corolla", 2020);
  myCar.displayInfo();
}
