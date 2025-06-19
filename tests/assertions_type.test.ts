import { Person } from "../src/person";

describe("Assertions Types", () => {
  it("should support in typescript", () => {
    const person: any = {
      name: "Irwanto Siregar",
      age: 28,
    };

    // If avoid func sayHello it will be error, because data type has change
    const person2: Person = person as Person;

    console.info(person2);
  });
});
