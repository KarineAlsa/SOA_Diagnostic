import { Tutor } from "../../Domain/Entity/Tutor";
import  TutorInterface  from "../../Domain/Port/TutorInterface";

export default class RegisterTutorUseCase {

    constructor(readonly repository:TutorInterface) {}

    async run( { name, lastName, email, cellphone}: {
        name: string;
        lastName: string; 
        email: string;
        cellphone: string;
      } ):Promise<Tutor|any> {
        try {

            let tutor = new Tutor(
                name,
                lastName,
                email,
                cellphone
                
            );
            return await this.repository.registerTutor(tutor);
        }catch(error) {

        }
    }

}