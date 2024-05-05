import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/RegisterStudentUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        const { name, registration_number, lastName, email, tutor } = request.body;
        
        if (!registration_number || !name || !lastName || !email ) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (registration_number.trim() === "" || name.trim() == "" || lastName.trim() == "" || email.trim() == ""){
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            
            let student = await this.useCase.run({
                name: name,
                registration_number: registration_number,
                lastName: lastName,
                email: email,
                tutor: tutor
                
            });
            if (student) {
                return response.status(200).json({data:student,message:"Estudiante creado",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo crear el estudiante",
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