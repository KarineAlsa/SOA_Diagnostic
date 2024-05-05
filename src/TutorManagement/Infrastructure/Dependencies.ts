import RegisterTutorCase from "../Application/UseCase/RegisterTutorUseCase";
import ListAllTutorCase from "../Application/UseCase/ListAllTutorUseCase";
import  listStudentsByTutor from "../Application/UseCase/ListStudentsbyTutorUseCase";
import AddAlumnTutorUseCase from "../Application/UseCase/AddAlumnToTutorUseCase";

import TutorMySQLRepository from "./Repository/TutorMysqlRepository"


import RegisterTutorController from './Controller/RegisterTutorController'
import ListAllTutorController from './Controller/ListAllTutorController'
import ListStudentsByTutor  from "./Controller/ListByTutorController";
import AddAlumnToTutorController from "./Controller/AddAlumnTutorController";

export const MySqlUserRepository = new TutorMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterTutorCase(currentRepository);
export const listAllCase = new ListAllTutorCase(currentRepository);                                                         
export const listStudentsByTutorCase = new listStudentsByTutor(currentRepository);
export const addAlumnToTutorCase = new AddAlumnTutorUseCase(currentRepository);

export const registerController = new RegisterTutorController(registerCase);
export const listAllController = new ListAllTutorController(listAllCase);
export const listByTutorController = new ListStudentsByTutor(listStudentsByTutorCase);
export const addAlumnToTutorController = new AddAlumnToTutorController(addAlumnToTutorCase);