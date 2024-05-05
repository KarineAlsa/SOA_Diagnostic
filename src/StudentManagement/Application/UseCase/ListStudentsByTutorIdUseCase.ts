import { Student } from "../../Domain/Entity/Student";
import  StudentInterface  from "../../Domain/Port/StudentInterface";

export default class StudentByTutorUseCase {

    constructor(readonly repository:StudentInterface) {}

    async run(tutor:number):Promise<Student|any> {
        try {

            return await this.repository.listByTutor(tutor);
        }catch(error) {

        }
    }

}