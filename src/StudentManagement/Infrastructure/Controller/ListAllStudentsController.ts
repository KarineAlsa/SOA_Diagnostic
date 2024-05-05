import { Request, Response } from "express";
import  ListAllUseCase  from "../../Application/UseCase/ListAllStudentsUseCase";


export default class RegisterController {

    constructor(readonly useCase:ListAllUseCase){}

    async run(request:Request,response:Response) {

        try {
            
            let students = await this.useCase.run();
            if (students) {
                return response.status(200).json({data:students,message:"Estudiantes obtenidos",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo obtener todos los estudiantes",
                    success: false,
                });
            }
        } catch (error:any) {
            console.log(error)
            response.status(500).send({
                
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
    }
    }