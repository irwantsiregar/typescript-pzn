describe("Foor Loop", () => {
  it("should support in typescript", () => {
    const names: string[] = ["Irwant", "Siregar", "Sigadong"];

    for (let index = 0; index < names.length; index++) {
      console.info(names[index]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });
});
