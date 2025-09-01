export class Student {
    firstName: string;
    lastName: string;
    id: string;
    address?: string;

    constructor(
        firstName: string,
        lastName: string,
        id: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}
