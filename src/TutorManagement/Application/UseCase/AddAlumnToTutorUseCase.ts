import  TutorInterface  from "../../Domain/Port/TutorInterface";

export default class AddAlumnTutorUseCase {

    constructor(readonly repository:TutorInterface) {}

    async run( tutor:number,alumn:number ):Promise<any> {
        try {
          
            return await this.repository.addAlumnTutor(tutor,alumn);
        }catch(error) {

        }
    }

}