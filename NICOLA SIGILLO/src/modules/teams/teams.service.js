const teamsService = {};
let teams = [];
let counterID = 0;

teamsService.getTeams = () => {
    return teams;
}

teamsService.getTeam = (id) => {
    for (let team of teams){
        if(team.id == id) return team
    }
    return null;
}

teamsService.addTeam = (name, country, league) => {
    const newTeam = {
        id: counterID,
        name: name,
        country: country,
        league: league
    }
    counterID++;
    teams.push(newTeam);
    return newTeam;
}

teamsService.deleteTeam = (id) => {}

export default teamsService;