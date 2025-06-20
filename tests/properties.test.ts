describe("Properties in Class", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest"; // Default value
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it("should can have properties", () => {
    const customer: Customer = new Customer(1, "John");
    customer.age = 20;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });
});
