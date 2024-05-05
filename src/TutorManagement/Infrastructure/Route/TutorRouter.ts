import  express  from "express";
import {  registerController, listAllController} from "../Dependencies";

const tutorRouter = express.Router();


tutorRouter.post("/",registerController.run.bind(registerController));
tutorRouter.get("/",listAllController.run.bind(listAllController));


export default tutorRouter;