describe("Interface Inheritance", () => {
  // This Interface
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  // Initialization class and used Interface = Implements
  class Person implements HasName, CanSayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, My name is ${this.name}`);
    }
  }

  it("should support interface inheritance", () => {
    const person: Person = new Person("Irwan");

    person.sayHello("Budi");
  });
});
