export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    dateOfHire: Date;
    salary: number;
  
    constructor(id: number, firstName: string, lastName: string, position: string, dateOfHire: Date, salary: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.position = position;
      this.dateOfHire = dateOfHire;
      this.salary = salary;
    }
  }
  