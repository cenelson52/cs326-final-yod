'use strict'


//retrieve the game
let game = games[0];//temp


//takes in player object and returns a div
function buildPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.innerText = '   ' + player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
    for(let i in player.stats){
        stats.innerHTML += ('   ' + i + ' : ' + player.stats[i] + ', ');
    }
    div.appendChild(stats);
    

    return div;
}
for(let i in game.players){
    document.getElementById('player-list').appendChild(buildPlayerDiv(game.players[i]));
}

document.getElementById('newplayer').addEventListener('click', () => {
    const name = document.getElementById('new-player-name').value;
    if(name === ''){
        alert('No name entered');
    }else{
        const player = {'name' : name, 'wins':0, 'losses':0, 'stats':{} };
        for(let i in game["custome-stats"]){
            player.stats[game["custome-stats"][i]] = 0;
        }
        //server stuff here
        game.players.push(player);//temp
    }
    

    //for testing purposes
    document.getElementById('player-list').innerHTML = '';
    for(let i in game.players){
        document.getElementById('player-list').appendChild(buildPlayerDiv(game.players[i]));
    }
});

document.getElementById('recordmatch').addEventListener('click', () => {
    //will route to match.html
});