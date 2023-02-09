import { Router } from "express";
import { CreatePositionController } from "../../../../modules/positions/useCases/createPosition/CreatePositionController";
import { ListPositionController } from "../../../../modules/positions/useCases/listPosition/ListPositionController";
import { SinglePositionController } from "../../../../modules/positions/useCases/singlePosition/SinglePositionController";

const positionRouter = Router();
const listPositionController = new ListPositionController();
const createPositionController = new CreatePositionController();
const singlePositionController = new SinglePositionController()

positionRouter.post("/", createPositionController.handle);

positionRouter.get("/", listPositionController.handle);

positionRouter.get("/:id", singlePositionController.handle);

export { positionRouter };
