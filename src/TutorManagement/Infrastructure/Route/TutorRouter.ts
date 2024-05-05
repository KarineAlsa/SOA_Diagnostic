import  express  from "express";
import {  registerController, listAllController, listByTutorController} from "../Dependencies";

const tutorRouter = express.Router();


tutorRouter.post("/",registerController.run.bind(registerController));
tutorRouter.get("/",listAllController.run.bind(listAllController));
tutorRouter.get("/:tutor/students",listByTutorController.run.bind(listByTutorController));


export default tutorRouter;