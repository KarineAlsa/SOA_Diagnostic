export class Student {

    public name:string;
    public registration_number:string;
    public lastName:string;
    public email:string;
    public tutor?:number
    public id?:number

    constructor(
        name:string,
        registration_number:string,
        lastName:string,
        email:string,
        tutor:number,
        id?:number
    ) {
        this.name = name;
        this.registration_number = registration_number;
        this.lastName = lastName;
        this.email = email;
        this.tutor = tutor;
        this.id = id;
    }
    

}