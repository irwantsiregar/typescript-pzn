import { Category, Product } from "../src/typeAlias";

describe("Type: Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: 1,
      name: "Laptop",
    };

    const product: Product = {
      id: "1",
      name: "Lenovo A330",
      price: 8900000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
