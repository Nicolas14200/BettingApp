export class Person {
    firstName: string ="" ;
    lastName: string = "g";
    age: number = 4;
    /*constructor(firstName: string, lastName:string, age: number ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }*/
    getFullName(): string{
        return this.firstName + " " + this.lastName;
    }
    
}


