import {Student} from "../Entity/Student";

export default interface StudentInterface{
    addSubjectToAlumn(subject: number, alumn: number): any;
    registerStudent(student:Student):Promise<Student|any>;
    listAll():Promise<Student[]|any>;
}