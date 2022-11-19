const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("should return intern", () => {
            const obj = new Intern();
            expect (obj instanceof Intern).toEqual(true);
        });

        it("should have intern constructor that will add the property school", () => {
            const obj = new Intern("Tom", "12",  "tom@tom.com", "Newschool");
            expect(obj.name).toEqual("Tom");
            expect(obj.id).toEqual("12");
            expect(obj.email).toEqual("tom@tom.com");
            expect(obj.school).toEqual("Newschool");

        });
    })
})  
