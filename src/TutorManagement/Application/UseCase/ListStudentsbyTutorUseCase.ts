
import  tutorInterface  from "../../Domain/Port/TutorInterface";

export default class StudentByTutorUseCase {

    constructor(readonly repository:tutorInterface) {}

    async run(tutor:number):Promise<any> {
        try {

            return await this.repository.listStudents(tutor);
        }catch(error) {

        }
    }

}