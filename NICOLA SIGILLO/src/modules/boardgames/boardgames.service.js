const boardGamesService = {};

let boardGames = [];
let counterID = 1;

boardGamesService.getBoardGames = () => {
    return boardGames;
};

boardGamesService.getBoardGame = (id) => {
    for (let boardGame of boardGames) {
        if (boardGame.id === id) return boardGame;
    }

    return null;
};

boardGamesService.addBoardGame = ({
    name,
    minPlayers,
    maxPlayers,
    averageDuration,
    acquiredDate,
    status
}) => {
    const newBoardGame = {
        id: counterID,
        name: name,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers,
        averageDuration: averageDuration,
        acquiredDate: acquiredDate,
        status: status
    };

    counterID++;
    boardGames.push(newBoardGame);
    return newBoardGame;
};

boardGamesService.updateBoardGame = (id, updatedData) => {
    for (let index = 0; index < boardGames.length; index++) {
        if (boardGames[index].id === id) {
            boardGames[index] = {
                ...boardGames[index],
                ...updatedData,
                id: boardGames[index].id
            };

            return boardGames[index];
        }
    }

    return null;
};

boardGamesService.deleteBoardGame = (id) => {
    for (let index = 0; index < boardGames.length; index++) {
        if (boardGames[index].id === id) {
            const removedBoardGame = boardGames[index];
            boardGames.splice(index, 1);
            return removedBoardGame;
        }
    }

    return null;
};

export default boardGamesService;