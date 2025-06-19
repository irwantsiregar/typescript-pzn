describe("Data Type", () => {
  it("should must be declare", () => {
    let name: string = "Irwant";
    let balance: number = 1000000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    // This error when run typescript compile, but success when run test with jest
    name = 1; // error
    balance = "1000000"; // error
    isVip = true; // error
  });
});
