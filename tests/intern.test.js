const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("should return intern", () => {
            const obj = new Intern();
            expect (obj instanceof Intern).toEqual(true);
        });

        it("should have intern constructor that will add the property school", () => {
            const obj = new Intern("school");

            expect("school" in obj).toEqual(true);

        });
    })
})  
