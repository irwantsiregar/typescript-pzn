import sayHello from "../src/sayHello";

describe("sayHello", () => {
  it("should say hello irwan", () => {
    expect(sayHello("Irwan")).toBe("Hello Irwan");
  });
});
