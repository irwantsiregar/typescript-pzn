import { Seller } from "../src/interface";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
    };

    console.info(seller);
  });
});
