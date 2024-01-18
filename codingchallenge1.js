const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummeles',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby','Lewandowski','Hummels'],
    date: 'Nove 9th, 2037',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Challenge 1
console.log("----------Challenge 1----------");
//1
const [players1, players2] = game.players;
console.log(players1,players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4
const player1Final = [...players1, 'Thiago','Coutinho',
'Periscic'];
//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1,draw,team2);
//6
const printGoal= function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
// printGoal('Davies','Muller','Lewandowski','Kimmich');
// printGoal('Davies','Muller');
printGoal(...game.scored)
//7


team1 < team2 && console.log('Team 1 is more likey to win');
team1 > team2 && console.log('Team 2 is more likey to win');

// Challenge 2
// 1
console.log("----------Challenge 2----------");
for( const [i, player] of game.scored.entries())
    console.log(`Goal ${i+1}: ${player}`);
// 2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds)
average += odd;
average /= odds.length;
console.log(average);
// 3
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// Challenge 3
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔄️ Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔄️ Substitution'],
    [64, '🟡 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔄️ Substitution'],
    [72, '🔄️ Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟡 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())]
console.log(events);
// 2
gameEvents.delete(64)
//3
console.log(`An event happend, on average, every 
${ 90/ gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend, on average, every 
${time / gameEvents.size} minutes`);
//4
for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST': 'SECOND';
    console.log(`${half} [HALF] ${min}: ${event}`);
}