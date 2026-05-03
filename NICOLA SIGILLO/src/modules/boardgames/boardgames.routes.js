import { Router } from 'express';

import boardGamesController from './boardgames.controller.js';

const boardGamesRouter = Router();

boardGamesRouter.get('/', boardGamesController.getBoardGames);
boardGamesRouter.get('/:idBoardGame', boardGamesController.getBoardGame);
boardGamesRouter.post('/', boardGamesController.addBoardGame);
boardGamesRouter.put('/:idBoardGame', boardGamesController.updateBoardGame);
boardGamesRouter.delete('/:idBoardGame', boardGamesController.deleteBoardGame);

export default boardGamesRouter;