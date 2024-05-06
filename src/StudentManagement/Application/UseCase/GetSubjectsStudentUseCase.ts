import  StudentInterface  from "../../Domain/Port/StudentInterface";

export default class GetSubjectsByAlumnUseCase {

    constructor(readonly repository:StudentInterface) {}

    async run(alumn:number):Promise<any> {
        try {

            return await this.repository.getSubjectsByAlumn(alumn);
        }catch(error) {

        }
    }

}