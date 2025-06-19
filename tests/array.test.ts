describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["Irwant", "Budi", "Joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  describe("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Main Game"; // Error type: Can't re-assign value in array
  });

  describe("should support tuple", () => {
    // Tuple: total values is fixed
    const person: readonly [string, string, number] = [
      "Irwanto",
      "Siregar",
      28,
    ];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = "Budi"; // Error type: Can't re-assign value in array
  });
});
