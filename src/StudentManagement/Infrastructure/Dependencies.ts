import RegisterStudentCase from "../Application/UseCase/RegisterStudentUseCase";
import listAllStudentsCase  from "../Application/UseCase/ListAllStudentsUseCase";
import listStudentsByTutorCase from "../Application/UseCase/ListStudentsByTutorIdUseCase";


import StudentsMySQLRepository from "./Repository/StudentMysqlRepository"

import RegisterStudentController from './Controller/RegisterStudentController'
import ListAllStudentsController from './Controller/ListAllStudentsController'
import ListByTutorController from './Controller/ListByTutorController'


export const MySqlUserRepository = new StudentsMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterStudentCase(currentRepository);
export const listAllStudents = new listAllStudentsCase(currentRepository);
export const listStudentsByTutor = new listStudentsByTutorCase(currentRepository);

export const registerController = new RegisterStudentController(registerCase);
export const listAllController = new ListAllStudentsController(listAllStudents);
export const listByTutorController = new ListByTutorController(listStudentsByTutor);

