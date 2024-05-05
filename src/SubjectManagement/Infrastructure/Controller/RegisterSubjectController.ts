import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/RegisterSubjectUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        const { name, information } = request.body;
        
        if (!information || !name ) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (information.trim() === "" || name.trim() == "") {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            
            let subject = await this.useCase.run({
                name: name,
                information: information,
                
            });
            if (subject) {
                return response.status(200).json({data:subject,message:"Materia creado",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo crear la materia",
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