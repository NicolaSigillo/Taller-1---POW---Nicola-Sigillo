import { Router } from 'express';

import boardGamesRouter from '../modules/boardgames/boardgames.routes.js';

const indexRouter = Router();

indexRouter.use("/boardgames", boardGamesRouter);

export default indexRouter;