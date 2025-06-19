describe("Indexable Interface", () => {
  it("should support: Indexable Interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Irwan", "Siregar", "Learned"];

    console.info(names);
  });

  it("should support indexable interface for non number index", () => {
    interface StringArray {
      [key: string]: string;
    }

    const dictionary: StringArray = {
      name: "Irwan",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Irwan");
    expect(dictionary["address"]).toBe("Indonesia");
  });
});
