const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("initialization", () => {
        it("should return manager", () => {
            const obj = new Manager();
            expect (obj instanceof Manager).toEqual(true);
        });
        it("should have office constructor that will add office number", () => {
          
            const obj = new Manager("Tim", "07", "tim@tim.com", "123");

            expect(obj.name).toEqual("Tim");
            expect(obj.id).toEqual("07");
            expect(obj.email).toEqual("tim@tim.com");
            expect(obj.office).toEqual("123");
      
            
      
          });

    })
})  

