import  express  from "express";
import { registerController} from "../Dependencies";

const subjectRouter = express.Router();

subjectRouter.post("/",registerController.run.bind(registerController));

export default subjectRouter;