describe("Switch", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "Irwan":
          return "Hi Irwan";
        case "Budi":
          return "Hi Budi";
        default:
          return "Hello";
      }
    }

    console.info(sayHello("Irwan"));
    console.info(sayHello("Budi"));
    console.info(sayHello("Joko"));
  });
});
