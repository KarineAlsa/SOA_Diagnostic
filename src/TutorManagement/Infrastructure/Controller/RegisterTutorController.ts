import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/RegisterTutorUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        const { name, lastName, email, cellphone } = request.body;
        
        if (!email || !name || !lastName || !cellphone) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (email.trim() === "" || name.trim() === "" || lastName.trim() === "" || cellphone.trim() === "") {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            
            let tutor = await this.useCase.run({
                name: name,
                lastName: lastName,
                email: email,
                cellphone: cellphone,
            });
            if (tutor) {
                return response.status(200).json({data:tutor,message:"Usuario creado",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo crear el tutor",
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