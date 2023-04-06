const gameObject = () => ({
  home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
          'Alan Anderson': {
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assists: 12,
              steals: 3,
              blocks: 1,
              slamDunks: 1,
          },
          'Reggie Evans': {
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assists: 12,
              steals: 12,
              blocks: 12,
              slamDunks: 7,
          },
          'Brook Lopez': {
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assists: 10,
              steals: 3,
              blocks: 1,
              slamDunks: 15,
          },
          'Mason Plumlee': {
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assists: 6,
              steals: 3,
              blocks: 8,
              slamDunks: 5,
          },
          'Jason Terry': {
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assists: 2,
              steals: 4,
              blocks: 11,
              slamDunks: 1,
          }
      }
  },
  away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
          'Jeff Adrien': {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2,
          },
          'Bismak Biyombo': {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10,
          },
          'DeSagna Diop': {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5,
          },
          'Ben Gordon': {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
          },
          'Brendan Haywood': {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12,
          }
      }
  }
});

const numPointsScored = (playerName) => {
    const obj = gameObject();
    let player
    if (Object.keys(obj.home.players).includes(playerName)) {
        console.log(`${playerName} is home team`)
        player = obj.home.players[playerName]
    } else {
        console.log(`${playerName} is away team`)
        player = obj.away.players[playerName]
    } return player.points;
}

const shoeSize = (playerName) => {
    const obj = gameObject();
    let player
    if (Object.keys(obj.home.players).includes(playerName)) {
        console.log(`${playerName} is home team`)
        player = obj.home.players[playerName]
    } else {
        console.log(`${playerName} is away team`)
        player = obj.away.players[playerName]
    } return player.shoe;    
}

const teamColors = (teamName) => {
    const obj = gameObject();
    if (obj.home.teamName === teamName) {
        return obj.home.colors;
    } else if (obj.away.teamName === teamName) {
        return obj.away.colors;
    }
}

const teamNames = () => {
    const obj = gameObject();
    return [obj.home.teamName, obj.away.teamName];
}

const playerNumbers = (teamName) => {
    const obj = gameObject();
    const teamPlayers = obj.home.teamName === teamName ? obj.home.players : obj.away.players;
    return Object.values(teamPlayers).map(player => player.number);
}

const playerStats = (playerName) => {
    const obj = gameObject();
    const allPlayers = {...obj.home.players, ...obj.away.players};
    if (allPlayers[playerName]) {
      console.log(`${playerName} stats:`)
      return allPlayers[playerName];
    }
}


console.log(numPointsScored('Ben Gordon'))
console.log(shoeSize('Ben Gordon'))
console.log(teamColors('Charlotte Hornets'))
console.log(teamNames())
console.log(playerNumbers('Charlotte Hornets'))
console.log(playerStats('Ben Gordon'))


//Bonus

const mostPointsScored = () => {
    const obj = gameObject();
    let mostPoints = 0;
    let playerName = '';
    Object.values(obj.home.players).forEach(player => {
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerName = Object.keys(obj.home.players).find(key => obj.home.players[key] === player);
      }
    });
    Object.values(obj.away.players).forEach(player => {
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerName = Object.keys(obj.away.players).find(key => obj.away.players[key] === player);
      }
    });
    return playerName;
}


const winningTeam = () => {
    const obj = gameObject();
    let homeScore = 0;
    let awayScore = 0;
    Object.values(obj.home.players).forEach(player => homeScore += player.points);
    Object.values(obj.away.players).forEach(player => awayScore += player.points);
    return homeScore > awayScore ? obj.home.teamName : obj.away.teamName;
}


const playerWithLongestName = () => {
    const obj = gameObject();
    let longestName = '';
    Object.keys(obj.home.players).forEach(playerName => {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    });
    Object.keys(obj.away.players).forEach(playerName => {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    });
    return longestName;
}

console.log(mostPointsScored())
console.log(winningTeam())
console.log(playerWithLongestName())


const doesLongNameStealATon = () => {
    const game = gameObject();
    let longestName = '';
    Object.keys(game.home.players).forEach(playerName => {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    });
    Object.keys(game.away.players).forEach(playerName => {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    });
    let mostSteals = 0;
    Object.values(game.home.players).forEach(player => {
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
      }
    });
    Object.values(game.away.players).forEach(player => {
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
      }
    });
    const longNamePlayer = game.home.players[longestName] || game.away.players[longestName];
    return longNamePlayer && longNamePlayer.steals === mostSteals;
}

console.log(doesLongNameStealATon())
