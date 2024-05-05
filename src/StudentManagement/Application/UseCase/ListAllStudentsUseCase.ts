import { Student } from "../../Domain/Entity/Student";
import  StudentInterface  from "../../Domain/Port/StudentInterface";

export default class RegisterStudentUseCase {

    constructor(readonly repository:StudentInterface) {}

    async run():Promise<Student|any> {
        try {

            return await this.repository.listAll();
        }catch(error) {

        }
    }

}