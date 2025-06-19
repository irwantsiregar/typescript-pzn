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

  it("should support: readonly property on interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1234534",
      npwp: "12575389434",
    };

    seller.name = "Toko Budi";
    // seller.nib = "324565443"; // Error: Can't update value because it readonly property

    console.info(seller);
  });

  it("should support: function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 4)).toBe(6);
    expect(add(4, 4)).toBe(8);
  });
});
