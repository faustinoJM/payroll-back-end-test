import { Router } from "express";
import { CreatePositionController } from "../../../../modules/positions/useCases/createPosition/CreatePositionController";
import { DeletePositionController } from "../../../../modules/positions/useCases/deletePosition/DeletePositionController";
import { ListPositionController } from "../../../../modules/positions/useCases/listPosition/ListPositionController";
import { SinglePositionController } from "../../../../modules/positions/useCases/singlePosition/SinglePositionController";

const positionRouter = Router();
const listPositionController = new ListPositionController();
const createPositionController = new CreatePositionController();
const singlePositionController = new SinglePositionController()
const deletePositionController = new DeletePositionController()

positionRouter.post("/", createPositionController.handle);

positionRouter.get("/", listPositionController.handle);

positionRouter.get("/:id", singlePositionController.handle);

positionRouter.delete("/:id", deletePositionController.handle)



export { positionRouter };
