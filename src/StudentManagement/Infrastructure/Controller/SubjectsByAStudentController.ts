import { Request, Response } from "express";
import  ListSubjectsUseCase  from "../../Application/UseCase/GetSubjectsStudentUseCase";


export default class SubjectsByAStudentController {

    constructor(readonly useCase:ListSubjectsUseCase){}

    async run(request:Request,response:Response) {
        const { student } = request.params;
        try {
            
            let subjects = await this.useCase.run(Number(student));
            if (subjects) {
                return response.status(200).json({data:subjects,message:"Materias del estudiante obtenidos",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo obtener todos las materias",
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