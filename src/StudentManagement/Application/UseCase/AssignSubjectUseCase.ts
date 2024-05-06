import  StudentInterface  from "../../Domain/Port/StudentInterface";

export default class AddSubjectToAlumnUseCase {

    constructor(readonly repository:StudentInterface) {}

    async run( alumn:number,subject:number ):Promise<any> {
        try {
          
            return await this.repository.addSubjectToAlumn(alumn,subject);
        }catch(error) {

        }
    }

}