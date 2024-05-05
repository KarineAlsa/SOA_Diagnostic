import { Tutor } from "../../Domain/Entity/Tutor";
import TutorInterface  from "../../Domain/Port/TutorInterface";
import query from "../../../Database/mysql";


export default class TutorMysqlRepository implements TutorInterface {
  async addAlumnTutor(tutor:number,alumn: number) {
    let updateQuery = "UPDATE Students SET tutor = ? where id = ?";
    const params: any[] = [tutor,alumn];
    try {
      const [result]: any = await query(updateQuery, params);

      if (result && result.affectedRows > 0) {
        return true
      } else {
        throw new Error("No se pudo actualizar el usuario");
      }
    } catch (error) {
      throw new Error(`Error en la operación de actualización`);
    }
  }
  async listStudents(tutor: number): Promise<any> {
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
  async registerTutor(tutor: Tutor): Promise<any> {
    const sql = "INSERT INTO Tutors (name, lastName,email,cellphone) VALUES (?,?,?,?)";
    const params: any[] = [tutor.name, tutor.lastName,tutor.email,tutor.cellphone];
    try {
      const [result]: any = await query(sql, params);
      

    if (result) {

      return {
        id: result.insertId, 
        name: tutor.name, 
        lastName: tutor.lastName, 
        email: tutor.email, 
        cellphone: tutor.cellphone, 
      }

    } else {
      throw new Error("Error al insertar el tutor en la base de datos");
    }
    }
    catch (error) {
    throw new Error(`Error en la operación de guardado`);
    }
  }  

  async listAll(): Promise<any> {
    const sql = "SELECT * FROM Tutors";
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
}