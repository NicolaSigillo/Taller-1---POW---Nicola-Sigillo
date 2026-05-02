import { Router } from 'express';

import teamsRouter from '../modules/teams/teams.routes.js';

const indexRouter = Router();

indexRouter.use("/teams", teamsRouter);

export default indexRouter;