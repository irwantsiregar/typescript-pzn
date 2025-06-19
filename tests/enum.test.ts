import { CustomerType, Custormer } from "../src/enum";

describe("Enum", () => {
  it("should support in typescript", () => {
    const customer: Custormer = {
      id: 1,
      name: "Irwant",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
