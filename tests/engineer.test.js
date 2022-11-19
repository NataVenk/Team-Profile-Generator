const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("should return engineer", () => {
            const obj = new Engineer();
            expect (obj instanceof Engineer).toEqual(true);
        });

        it("should have engineer constructor that will add the property GitHub user name", () => {
            const obj = new Engineer("sally", "3", "sal@sal.com", "sal.github");

            expect(obj.name).toEqual("sally");
            expect(obj.id).toEqual("3");
            expect(obj.email).toEqual("sal@sal.com");
            expect(obj.github).toEqual("sal.github");

        });
    })
})  
