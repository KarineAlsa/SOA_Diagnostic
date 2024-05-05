import { Subject } from "../../Domain/Entity/Subject";
import SubjectInterface  from "../../Domain/Port/SubjectInterface";
import query from "../../../Database/mysql";


export default class SubjectMysqlRepository implements SubjectInterface {
  async registerSubject(subject: Subject): Promise<any> {
    const sql = "INSERT INTO Subjects (name, information) VALUES (?,?)";
    const params: any[] = [subject.name, subject.information];
    try {
      const [result]: any = await query(sql, params);
      

    if (result) {

      return {
        id: result.insertId, 
        name: subject.name, 
        information: subject.information,  
      }

    } else {
      throw new Error("Error al insertar el subject en la base de datos");
    }
    }
    catch (error) {
    throw new Error(`Error en la operación de guardado`);
    }
    }
}