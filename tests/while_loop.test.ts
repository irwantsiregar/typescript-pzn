describe("While Loop", () => {
  it("should support while loop", () => {
    let counter: number = 0;

    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("should support do-while loop", () => {
    let counter: number = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });

  it("should support break and continue", () => {
    let counter: number = 0;

    do {
      counter++;

      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        continue;
      }

      console.info(counter);
    } while (true);
  });
});
