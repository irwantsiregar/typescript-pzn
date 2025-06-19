import { Employee, Manager } from "../src/extends_interface";

describe("Extends & Function Interface", () => {
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

    console.log(manager);
  });
});
