import { Request, Response } from "express";
import  ListAllByTutorUseCase  from "../../Application/UseCase/ListStudentsbyTutorUseCase";


export default class ListStudentController {

    constructor(readonly useCase:ListAllByTutorUseCase){}

    async run(request:Request,response:Response) {
        const { tutor } = request.params;
        console.log(tutor)
        if (!tutor) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        try {
            
            let students = await this.useCase.run(Number(tutor));
            if (students) {
                return response.status(200).json({data:students,message:"Estudiantes del tutor obtenidos",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo obtener los estudiantes del tutor",
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