import { Router } from 'express';

import teamsController from './teams.controller.js';

const teamsRouter = Router();

teamsRouter.get("/", teamsController.getTeams);
teamsRouter.get("/:idTeam", teamsController.getTeam);
teamsRouter.post("/", teamsController.addTeam);
export default teamsRouter;