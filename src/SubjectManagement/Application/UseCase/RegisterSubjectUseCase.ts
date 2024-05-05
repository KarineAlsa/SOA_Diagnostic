import { Subject } from "../../Domain/Entity/Subject";
import  SubjectInterface  from "../../Domain/Port/SubjectInterface";

export default class RegisterSubjectUseCase {

    constructor(readonly repository:SubjectInterface) {}

    async run( { name, information }: {
        name: string;
        information: string; 
        
      } ):Promise<Subject|any> {
        try {

            let subject = new Subject(
                name,
                information,
                
                
            );
            return await this.repository.registerSubject(subject);
        }catch(error) {

        }
    }

}