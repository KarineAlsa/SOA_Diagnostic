import  express  from "express";
import { registerController, listAllController} from "../Dependencies";

const studentRouter = express.Router();

studentRouter.post("/",registerController.run.bind(registerController));
studentRouter.get("/",listAllController.run.bind(listAllController));

export default studentRouter;