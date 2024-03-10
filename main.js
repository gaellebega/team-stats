const  team = {
    _players : [
      player1 = { firstName: 'mutoni', lastName: 'diane', age: 45},
      player2 = {firstName: 'mugeni', lastName: 'anitha', age: 60},
      player3 = {firstName: 'uwase', lastName: 'ange', age: 42},
    ],
    _games : [
      games1 = {opponent:'ange',teamPoints: 20,opponetPoints: 78},
      games2 = {opponent:'happy',teamPoints: 10, opponentPoints: 10},
      games3 = {opponent: 'yvan',teamPoints: 32, opponentPoints:23},
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addplayer(newFirstName, newLastName, newAge){
     const newPlayer = {
        firstName :newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(newPlayer);
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
    const newGames ={
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGames);
    },
  }
  team.addplayer('Bugs','Bunny',60);
  team.addGame('Titans',700,82);
  console.log(team._players);
  console.log(team._games);
  
  
  
  
  
  
  
  
  
  