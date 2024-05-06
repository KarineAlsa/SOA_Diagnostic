import { Request, Response } from "express";
import  AssignUseCase  from "../../Application/UseCase/AssignSubjectUseCase";


export default class AssignController {

    constructor(readonly useCase:AssignUseCase){}

    async run(request:Request,response:Response) {
        const { subject } = request.body;
        const { student } = request.params;
        
        if (!subject ) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        
        try {
            
            let studentResult = await this.useCase.run(Number(student),Number(subject));
            if (studentResult) {
                return response.status(200).json({data:studentResult,message:"materia asignada",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo asignar la materia",
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