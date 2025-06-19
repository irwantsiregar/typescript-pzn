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

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayaHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayaHello("Irwan")).toBe("Hello Irwan");
    expect(sayaHello("Irwan Siregar")).toBe("Hello Irwan Siregar");
  });
});
