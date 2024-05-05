import { Request, Response } from "express";
import  ListAllUseCase  from "../../Application/UseCase/ListAllTutorUseCase";


export default class RegisterController {

    constructor(readonly useCase:ListAllUseCase){}

    async run(request:Request,response:Response) {

        try {
            
            let tutors = await this.useCase.run();
            if (tutors) {
                return response.status(200).json({data:tutors,message:"Tutores obtenidos",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo obtener todos los tutores",
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