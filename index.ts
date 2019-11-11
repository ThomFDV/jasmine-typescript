export default class user {
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    constructor(email: string, firstname: string, lastname: string, age: number) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    isValid(): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.email) && this.firstname && this.lastname && (this.age > 13)) return true;
        return false;
    }
}