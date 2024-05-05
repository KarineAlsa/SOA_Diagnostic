import RegisterStudentCase from "../Application/UseCase/RegisterStudentUseCase";


import RegisterMySQLRepository from "./Repository/StudentMysqlRepository"


import RegisterStudentController from './Controller/RegisterStudentController'


export const MySqlUserRepository = new RegisterMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterStudentCase(currentRepository);

export const registerController = new RegisterStudentController(registerCase);

