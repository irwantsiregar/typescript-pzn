import { Seller } from "../src/interface";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1234534",
      npwp: "12575389434",
    };

    console.info(seller);
  });

  it("should support with readonly on properties", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1234534",
      npwp: "12575389434",
    };

    seller.name = "Toko Budi";
    // seller.nib = "324565443"; // Error: Cant update value because it readonly property

    console.info(seller);
  });
});
