describe("Method in Class", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, My name is ${this.name}`);
    }
  }

  it("should can have method", () => {
    const customer: Customer = new Customer(1, "John");
    customer.sayHello("Budi");
  });
});
