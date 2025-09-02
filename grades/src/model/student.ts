export class Student {
    firstName: string;
    lastName: string;
    id: string;
    email: string;
    address?: string;

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = id;
    }
}
