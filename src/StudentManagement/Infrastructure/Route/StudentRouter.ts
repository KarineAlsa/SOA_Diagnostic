import  express  from "express";
import { registerController} from "../Dependencies";

const studentRouter = express.Router();

studentRouter.post("/",registerController.run.bind(registerController));

export default studentRouter;