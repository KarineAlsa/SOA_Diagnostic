import  express  from "express";
import { registerController, listAllController, assignSubjectController, subjectsByAStudentController} from "../Dependencies";

const studentRouter = express.Router();

studentRouter.post("/",registerController.run.bind(registerController));
studentRouter.get("/",listAllController.run.bind(listAllController));
studentRouter.put("/:student/subjects",assignSubjectController.run.bind(assignSubjectController));
studentRouter.get("/:student/subjects",subjectsByAStudentController.run.bind(subjectsByAStudentController));

export default studentRouter;