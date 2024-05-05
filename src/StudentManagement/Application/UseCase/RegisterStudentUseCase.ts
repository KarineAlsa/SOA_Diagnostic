import { Student } from "../../Domain/Entity/Student";
import  StudentInterface  from "../../Domain/Port/StudentInterface";

export default class RegisterStudentUseCase {

    constructor(readonly repository:StudentInterface) {}

    async run( { name, registration_number, lastName, email,tutor}: {
        name: string;
        registration_number: string;
        lastName: string;
        email: string;
        tutor: number;
        
      } ):Promise<Student|any> {
        try {

            let student = new Student(
                name,
                registration_number,
                lastName,
                email,
                tutor  
            );
            return await this.repository.registerStudent(student);
        }catch(error) {

        }
    }

}