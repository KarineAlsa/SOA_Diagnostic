import {Student} from "../Entity/Student";

export default interface StudentInterface{
    registerStudent(student:Student):Promise<Student|any>;
    listAll():Promise<Student[]|any>;
    listByTutor(tutor:number):Promise<Student[]|any>;
}