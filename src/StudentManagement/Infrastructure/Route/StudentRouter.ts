import  express  from "express";
import { registerController, listAllController, listByTutorController} from "../Dependencies";

const studentRouter = express.Router();

studentRouter.post("/",registerController.run.bind(registerController));
studentRouter.get("/",listAllController.run.bind(listAllController));
studentRouter.get("/:tutor/tutor",listByTutorController.run.bind(listByTutorController));

export default studentRouter;