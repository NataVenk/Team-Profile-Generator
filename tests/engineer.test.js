const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("should return engineer", () => {
            const obj = new Engineer();
            expect (obj instanceof Engineer).toEqual(true);
        });

        it("should have engineer constructor that will add the property GitHub user name", () => {
            const obj = new Engineer("github");

            expect("github" in obj).toEqual(true);

        });
    })
})  
