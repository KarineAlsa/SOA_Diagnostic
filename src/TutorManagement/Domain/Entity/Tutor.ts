export class Tutor {

    public name:string;
    public lastName:string;
    public email:string;
    public cellphone:string;
    public id?:number

    constructor(
        name:string,
        lastName:string,
        email:string,
        cellphone:string,
        id?:number
    ) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.cellphone = cellphone;
        this.id = id;
    }

    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
    public getlastName(){
        return this.lastName;
    }
    public getEmail(){
        return this.email;
    }
    public getCellphone(){
        return this.cellphone;
    }
    

}