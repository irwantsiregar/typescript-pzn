describe("Getter & Setter in Class", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      }

      return "empty";
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should can have method", () => {
    const category: Category = new Category();
    console.info(category.name);

    category.name = "Food";
    console.info(category.name);
  });
});
