import { Student } from "../../Domain/Entity/Student";
import StudentInterface  from "../../Domain/Port/StudentInterface";
import query from "../../../Database/mysql";


export default class StudentMysqlRepository implements StudentInterface {
  async listByTutor(tutor: number): Promise<any> {
    const sql = "SELECT * FROM Students WHERE tutor = ?";
    const params: any[] = [tutor];
    try {
      const [result]: any = await query(sql, params);
      
      if (result){
        return result;
      }
      
      else {
        false
      }
    }
    catch (error) {
      false
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
}