import {Tutor} from "../Entity/Tutor";

export default interface TutorInterface{
    registerTutor(tutor:Tutor):Promise<Tutor|any>;
    listAll():Promise<any>;
    listStudents(tutor:number):Promise<any>;
}