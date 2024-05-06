import { Student } from "../../Domain/Entity/Student";
import StudentInterface  from "../../Domain/Port/StudentInterface";
import query from "../../../Database/mysql";


export default class StudentMysqlRepository implements StudentInterface {
  async getSubjectsByAlumn(alumn: number): Promise<any> {
    const student = await this.getStudentById(alumn);
    const sql = "SELECT idSubject FROM StudentSubject where idStudent = ?";
    
    const params: any[] = [alumn];
    try {
        const [result]: any = await query(sql, params)
        const idSubjects = result.map((row: any) => row.idSubject);
        
        const sql2 = "SELECT * FROM Subjects WHERE id IN (" + idSubjects.map(() => "?").join(",") + ")";
        const params2: any[] = idSubjects;

        const [subjectsResult]: any = await query(sql2, params2);
      
      
      if (result && result.length > 0) {
        

        if (subjectsResult && subjectsResult.length > 0) {
            return{
                student: {
                    id: student.id,
                    registration_number: student.registration_number,
                    name: student.name,
                    lastName: student.lastName,
                    email: student.email,
                    tutor: student.tutor,
                    subjects: subjectsResult
                }
                
            }
            
        } else {
            return false; 
        }
    }
      else {
        return false;
      }
    }
    catch (error) {
      return false;
    }
  }
  async addSubjectToAlumn(alumn: number, subject: number) {
    const sql = "INSERT INTO StudentSubject (idStudent, idSubject) VALUES (?,?)";
    const params: any[] = [alumn,subject];
    try {
        const [result]: any = await query(sql, params);
        if (result){
            return true
          }
          else {
            return false;
          }
    } catch (error) {
        return false;
    }
  }

  async listAll(): Promise<any> {
    const sql = "SELECT * FROM Students";
    const params: any[] = [];
    try {
      const [result]: any = await query(sql, params);
      
      if (result){
        return result
      }
      else {
        return false;
      }
    }
    catch (error) {
      return false;
    }
  }
  async registerStudent(student: Student): Promise<any> {
    const sql = "INSERT INTO Students (name, registration_number, lastName, email, tutor) VALUES (?,?,?,?,?)";
    const params: any[] = [student.name, student.registration_number, student.lastName, student.email, student.tutor];
    try {
      const [result]: any = await query(sql, params);
      

    if (result) {

      return {
        id: result.insertId, 
        name: student.name, 
        information: student.registration_number,
        lastName: student.lastName,
        email: student.email,
        tutor: student.tutor  
      }

    } else {
      throw new Error("Error al insertar el student en la base de datos");
    }
    }
    catch (error) {
    throw new Error(`Error en la operación de guardado`);
    }
    }

    async getStudentById(id: number): Promise<any> {
        const sql = "SELECT * FROM Students WHERE id = ?";
        const params: any[] = [id];
        try {
            const [[result]]: any = await query(sql, params);
            if (result){
                return result;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}