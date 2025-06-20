describe("Inheritance on Class", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should can inheritance on class", () => {
    const employee: Employee = new Employee("Irwan");
    console.info(employee.name);

    const manager: Manager = new Manager("Budi");
    console.info(manager.name);

    const director: Director = new Director("Eko");
    console.info(director.name);
  });
});
