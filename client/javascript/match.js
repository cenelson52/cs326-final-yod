'use strict'
//in place of actually fetching the data
const game = games[0];
const availplayers = game.players;
const team1 = [];
const team2 = [];
let selectedplayer = null;


function buildPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.classList.add('unselected');
    div.innerText = player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
    stats.innerHTML += 'wins : ' + player.wins + ' | losses : ' + player.losses ;
    
    div.appendChild(stats);
    

    return div;
}

for(let i in availplayers){
    document.getElementById('playerlist').appendChild(buildPlayerDiv(availplayers[i]));
}

const playerdivs = document.getElementsByClassName('player');
//console.log(playerdivs);

for(let i = 0; i < playerdivs.length; i++){
   // console.log(playerdivs[i])
    playerdivs[i].addEventListener('click', () => {

        if(selectedplayer === playerdivs[i]){
            selectedplayer = null;
            playerdivs[i].classList.add('unselected');
            playerdivs[i].classList.remove('selected');
            
        }else{
            if(selectedplayer !== null){
                selectedplayer.classList.remove('selected');
                selectedplayer.classList.remove('unselected');
            }

            selectedplayer = playerdivs[i];
            playerdivs[i].classList.remove('unselected');
            playerdivs[i].classList.add('selected');
        }

    });
}