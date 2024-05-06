import RegisterStudentCase from "../Application/UseCase/RegisterStudentUseCase";
import listAllStudentsCase  from "../Application/UseCase/ListAllStudentsUseCase";
import assignSubjectCase  from "../Application/UseCase/AssignSubjectUseCase";

import StudentsMySQLRepository from "./Repository/StudentMysqlRepository"

import RegisterStudentController from './Controller/RegisterStudentController'
import ListAllStudentsController from './Controller/ListAllStudentsController'
import AssignSubjectController from './Controller/AssignSubjectController'

export const MySqlUserRepository = new StudentsMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterStudentCase(currentRepository);
export const listAllStudents = new listAllStudentsCase(currentRepository);
export const assignSubject = new assignSubjectCase(currentRepository);

export const registerController = new RegisterStudentController(registerCase);
export const listAllController = new ListAllStudentsController(listAllStudents);
export const assignSubjectController = new AssignSubjectController(assignSubject);
