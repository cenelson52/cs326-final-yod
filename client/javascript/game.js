'use strict'


//retrieve the game
let game = games[0];//temp

document.getElementById('titlespot').innerText = game.name;

function buildMatchDiv(match){
    const div = document.createElement('div');
    div.classList.add('row-4');
    div.classList.add('match');
    const team1 = document.createElement('div');
    const team2 = document.createElement('div');
    team1.classList.add('col-4');
    team2.classList.add('col-4');
    if(match.team1.won){
        team1.classList.add('winner');
        team2.classList.add('loser');
    }else{
        team2.classList.add('winner');
        team1.classList.add('loser');
    }

    for(let i in match.team1.players){
        team1.appendChild(buildPlayerDiv2(match.team1.players[i]));
    }
    team1.innerHTML += 'score: ' + match.team1.score;
    
    for(let i in match.team2.players){
        team2.appendChild(buildPlayerDiv2(match.team2.players[i]));
    }
    team2.innerHTML += 'score: ' + match.team2.score;

    


    const space = document.createElement('div');
    space.classList.add('col-4');
    space.innerText = 'vs.'
    div.appendChild(team1);
    div.appendChild(space);
    div.appendChild(team2);
    div.innerHTML += 'Notes: ' + (match['match-notes']);
    return div;
}

for(let i in game.matches){
    document.getElementById('recordedmatches').appendChild(buildMatchDiv(game.matches[i]));
}




//takes in player object and returns a div
function buildPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.innerText = player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
    stats.innerHTML += 'wins : ' + player.wins + ' | losses : ' + player.losses + '<br>';
    for(let i in player.stats){
        stats.innerHTML += ('-' + i + ' : ' + player.stats[i] + '<br>');
    }
    div.appendChild(stats);
    

    return div;
}
function buildPlayerDiv2(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.innerText = player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
   
    for(let i in player.stats){
        stats.innerHTML += ('-' + i + ' : ' + player.stats[i] + '<br>');
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



document.getElementById('player-search').addEventListener('keyup', () => {
    document.getElementById('player-list').innerHTML = '';
    const search = document.getElementById('player-search').value;
    //const results = [];
    for(let i in game.players){
        if(game.players[i].name.includes(search)){
            document.getElementById('player-list').appendChild(buildPlayerDiv(game.players[i]));
            //results.push(game.players[i]);
        }
    }

});

document.getElementById('recordmatch').addEventListener('click', () => {
    //will route to match.html
});