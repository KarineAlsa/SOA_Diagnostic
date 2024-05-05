import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/AddAlumnToTutorUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        const { alumn } = request.body;
        const { tutor } = request.params;
        
        if (!alumn ) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        try {
            
            let alumnResult= await this.useCase.run(Number(tutor),Number(alumn));
            if (alumnResult) {
                return response.status(200).json({data:alumnResult,message:"estudiante agregado al tutor",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo asignar estudiante al tutor",
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