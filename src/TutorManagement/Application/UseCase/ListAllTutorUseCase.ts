import { Tutor } from "../../Domain/Entity/Tutor";
import  TutorInterface  from "../../Domain/Port/TutorInterface";

export default class RegisterTutorUseCase {

    constructor(readonly repository:TutorInterface) {}

    async run():Promise<Tutor|any> {
        try {

            return await this.repository.listAll();
        }catch(error) {

        }
    }

}