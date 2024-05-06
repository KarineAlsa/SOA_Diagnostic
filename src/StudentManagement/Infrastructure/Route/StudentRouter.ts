import  express  from "express";
import { registerController, listAllController, assignSubjectController} from "../Dependencies";

const studentRouter = express.Router();

studentRouter.post("/",registerController.run.bind(registerController));
studentRouter.get("/",listAllController.run.bind(listAllController));
studentRouter.put("/:student/subjects",assignSubjectController.run.bind(assignSubjectController));


export default studentRouter;