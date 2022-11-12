const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("initialization", () => {
        it("should return employee", () => {
            const obj = new Employee();
            expect(obj instanceof Employee).toEqual(true);
        });

        it("should have a employee constructor that will add the property name", () => {
            const obj = new Employee("name");

            expect("name" in obj).toEqual(true);

        });
        it("should have a employee constructor that will add the property id", () => {
            const obj = new Employee("id");

            expect("id" in obj).toEqual(true);

        });
        it("should have a employee constructor that will add the property email", () => {
            const obj = new Employee("email");

            expect("email" in obj).toEqual(true);

        });


    })
})

