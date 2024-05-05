import RegisterStudentCase from "../Application/UseCase/RegisterStudentUseCase";
import listAllStudentsCase  from "../Application/UseCase/ListAllStudentsUseCase";

import StudentsMySQLRepository from "./Repository/StudentMysqlRepository"

import RegisterStudentController from './Controller/RegisterStudentController'
import ListAllStudentsController from './Controller/ListAllStudentsController'


export const MySqlUserRepository = new StudentsMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterStudentCase(currentRepository);
export const listAllStudents = new listAllStudentsCase(currentRepository);

export const registerController = new RegisterStudentController(registerCase);
export const listAllController = new ListAllStudentsController(listAllStudents);
