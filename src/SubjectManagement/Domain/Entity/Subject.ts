export class Subject {

    public name:string;
    public information:string;
    public id?:number

    constructor(
        name:string,
        information:string,
        id?:number
    ) {
        this.name = name;
        this.information = information;
        this.id = id;
    }
    

}