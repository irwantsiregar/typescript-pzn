"use strict";
describe("Data type: Any", () => {
    it("should support in typescript", () => {
        const person = {
            id: 1,
            name: "Irwanto Siregar",
            age: 28,
        };
        person.age = 30;
        person.address = "Indonesia";
        console.info(person);
    });
});
