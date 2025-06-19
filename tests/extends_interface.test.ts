import { Employee, Manager } from "../src/extends_interface";

describe("Extends & Function In Interface", () => {
  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Irwan",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Kurniawan",
      division: "IT",
      numberOfEmployee: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Eko",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "2",
      name: "Irwan",
    };

    console.info(domain);
  });
});
