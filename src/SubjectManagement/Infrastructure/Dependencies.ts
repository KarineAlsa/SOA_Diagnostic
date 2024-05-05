import RegisterTutorCase from "../Application/UseCase/RegisterSubjectUseCase";


import TutorMySQLRepository from "./Repository/SubjectMysqlRepository"


import RegisterTutorController from './Controller/RegisterSubjectController'


export const MySqlUserRepository = new TutorMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterTutorCase(currentRepository);


export const registerController = new RegisterTutorController(registerCase);

