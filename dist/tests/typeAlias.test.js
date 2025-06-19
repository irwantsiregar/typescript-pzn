describe("Type: Alias", () => {
    it("should support in typescript", () => {
        const category = {
            id: 1,
            name: "Laptop",
        };
        const product = {
            id: "1",
            name: "Lenovo A330",
            price: 8900000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
