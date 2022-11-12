const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("initialization", () => {
        it("should return manager", () => {
            const obj = new Manager();
            expect (obj instanceof Manager).toEqual(true);
        });

        it("should have manager constructor that will add the property office number", () => {
            const obj = new Manager("office");

            expect("office" in obj).toEqual(true);

        });
    })
})  

