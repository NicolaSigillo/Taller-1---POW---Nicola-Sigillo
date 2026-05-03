import boardGamesService from './boardgames.service.js';

const allowedStatuses = [
    'En perfectas condiciones',
    'Ligeramente usado',
    'Deteriorado',
    'Dañado'
];

const boardGamesController = {};

const isValidBoardGamePayload = (payload) => {
    const {
        name,
        minPlayers,
        maxPlayers,
        averageDuration,
        acquiredDate,
        status
    } = payload;

    if (!name || !acquiredDate || !status) return false;

    const parsedMinPlayers = Number(minPlayers);
    const parsedMaxPlayers = Number(maxPlayers);
    const parsedAverageDuration = Number(averageDuration);
    const parsedDate = new Date(acquiredDate);

    return (
        Number.isInteger(parsedMinPlayers) &&
        Number.isInteger(parsedMaxPlayers) &&
        Number.isInteger(parsedAverageDuration) &&
        parsedMinPlayers > 0 &&
        parsedMaxPlayers > 0 &&
        parsedAverageDuration > 0 &&
        parsedMinPlayers <= parsedMaxPlayers &&
        !Number.isNaN(parsedDate.getTime()) &&
        allowedStatuses.includes(status)
    );
};

boardGamesController.getBoardGames = (req, res) => {
    const boardGames = boardGamesService.getBoardGames();
    res.status(200).send({
        boardGames: boardGames
    });
};

boardGamesController.getBoardGame = (req, res) => {
    const idBoardGame = Number(req.params.idBoardGame);
    const boardGame = boardGamesService.getBoardGame(idBoardGame);

    if (!boardGame) {
        return res.status(404).send({
            msg: 'Juego de mesa no encontrado'
        });
    }

    res.status(200).send({
        boardGame: boardGame
    });
};

boardGamesController.addBoardGame = (req, res) => {
    if (!isValidBoardGamePayload(req.body)) {
        return res.status(400).send({
            msg: "Datos invalidos para crear el juego de mesa, recuerda que: acquiredDate debes ser una fecha en formato YYYY-MM-DD. minPlayers  un int > 0, maxPlayers un int > 0 y >= minPlayers. averageDuration u int > 0 en minutos. name debe ser un string cualquiera y status debe ser uno de los siguientes: 'En perfectas condiciones', 'Ligeramente usado', 'Deteriorado' o 'Dañado'."
        });
    }

    const boardGame = boardGamesService.addBoardGame({
        name: req.body.name,
        minPlayers: Number(req.body.minPlayers),
        maxPlayers: Number(req.body.maxPlayers),
        averageDuration: Number(req.body.averageDuration),
        acquiredDate: req.body.acquiredDate,
        status: req.body.status
    });

    res.status(201).send({
        msg: 'Juego de mesa creado exitosamente',
        boardGame: boardGame
    });
};

boardGamesController.updateBoardGame = (req, res) => {
    const idBoardGame = Number(req.params.idBoardGame);

    if (!isValidBoardGamePayload(req.body)) {
        return res.status(400).send({
            msg: 'Datos incorrectos para poder actualizar el juego de mesa'
        });
    }

    const boardGame = boardGamesService.updateBoardGame(idBoardGame, {
        name: req.body.name,
        minPlayers: Number(req.body.minPlayers),
        maxPlayers: Number(req.body.maxPlayers),
        averageDuration: Number(req.body.averageDuration),
        acquiredDate: req.body.acquiredDate,
        status: req.body.status
    });

    if (!boardGame) {
        return res.status(404).send({
            msg: 'Juego de mesa no encontrado'
        });
    }

    res.status(200).send({
        msg: 'Actualizacion de juego de mesa exitosa',
        boardGame: boardGame
    });
};

boardGamesController.deleteBoardGame = (req, res) => {
    const idBoardGame = Number(req.params.idBoardGame);
    const boardGame = boardGamesService.deleteBoardGame(idBoardGame);

    if (!boardGame) {
        return res.status(404).send({
            msg: 'Juego de mesa no encontrado'
        });
    }

    res.status(200).send({
        msg: 'Eliminacion de juego de mesa exitosa',
        boardGame: boardGame
    });
};

export default boardGamesController;