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
});
