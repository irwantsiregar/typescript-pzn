describe("Function", () => {
  it("should support function", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Irwan")).toBe("Hello Irwan");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Irwan");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Irwan")).toBe("Hello Irwan");
  });

  it("should support function with rest parameters", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support function with optional parameter", () => {
    function sayaHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayaHello("Irwan")).toBe("Hello Irwan");
    expect(sayaHello("Irwan", "Siregar")).toBe("Hello Irwan Siregar");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      } else {
        return value;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("Irwan")).toBe("IRWAN");
  });

  it("should support function as parameter", () => {
    function sayaHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayaHello("Irwan", toUpper)).toBe("Hello IRWAN");

    // Anonymous function
    expect(
      sayaHello("Irwan", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello IRWAN");

    // Arrow function
    expect(
      sayaHello("Irwan", (name: string): string => {
        return name.toUpperCase();
      })
    ).toBe("Hello IRWAN");
  });
});
