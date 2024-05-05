import {Subject} from "../Entity/Subject";

export default interface SubjectInterface{
    registerSubject(subject:Subject):Promise<Subject|any>;
}