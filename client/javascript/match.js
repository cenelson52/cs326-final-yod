'use strict'
//in place of actually fetching the data
const game = games[0];
const availplayers = game.players;
const team0 = [];
const team1 = [];
const team2 = [];
let selectedplayer = {'div' : null, 'team' : team0}; //0 = no team, else its team #


function buildPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.classList.add('unselected');
    div.innerText = player.name;
    div.innerHTML += '  -  wins : ' + player.wins + ' | losses : ' + player.losses ;
    

    

    return div;
}

for(let i in availplayers){
    team0.push(buildPlayerDiv(availplayers[i]));
}

function renderPlayers(){
    
    document.getElementById('playerlist').innerHTML = '';
    document.getElementById('team1').innerHTML = '';
    document.getElementById('team2').innerHTML = '';
    pts();
    printTeam(team0);
    printTeam(team1);
    for(let i in team0){
        //console.log(team0[i]);
        document.getElementById('playerlist').appendChild(team0[i]);
    }
    for(let i in team1){
        document.getElementById('team1').appendChild(team1[i]);
    }
    for(let i in team2){
        document.getElementById('team2').appendChild(team2[i]);
    }
}

renderPlayers();

const playerdivs = document.getElementsByClassName('player');
//console.log(playerdivs);

for(let i = 0; i < playerdivs.length; i++){
   // console.log(playerdivs[i])
    playerdivs[i].addEventListener('click', () => {

        if(selectedplayer.div === playerdivs[i]){
            deselect();
            
        }else{
            if(selectedplayer.div !== null){
                deselect();
            }
            console.log(playerdivs[i]);
            select(playerdivs[i]);
        }
    });
}

function getIndex(array, el){
    for(let i in array){
        if(array[i] === el){
            return i;
        }
    }
    return -1;
}

function pts(){
    console.log('team0: ' + team0.length+ ' '+ team0);
    console.log('team1: ' +  team1.length+ ' '+team1);
    console.log('team2: ' +  team2.length+ ' '+team2);
}
function printTeam(team){
    console.log('-');
    for(let i in team){
        console.log(team[i]);
    }
}

function getTeam(pdiv){
    const parent = pdiv.parentElement;

    if(parent === document.getElementById('playerlist')){
        return team0;
    }
    if(parent === document.getElementById('team1')){
        return team1;
    }
    if(parent === document.getElementById('team2')){
        return team2;
    }
    return null;
}

function select(pdiv){
    pdiv.classList.add('selected');
    pdiv.classList.remove('unselected');
    selectedplayer.div = pdiv;
    selectedplayer.team = getTeam(pdiv);
}
function deselect(){
    selectedplayer.div.classList.add('unselected');
    selectedplayer.div.classList.remove('selected');
    selectedplayer.div = null;
    selectedplayer.team = null;
}

document.getElementById('team1').addEventListener('click', () => {
    if(selectedplayer.div !== null && selectedplayer.team !== team1){
        selectedplayer.team.splice(getIndex(selectedplayer.div));
        console.log('selected: ' + selectedplayer.div);//why is this an array
        team1.push(selectedplayer.div);
        selectedplayer.team = team1;
        deselect();
        
    }
    renderPlayers();
});

document.getElementById('team2').addEventListener('click', () => {
    if(selectedplayer.div !== null && selectedplayer.team !== team2){
        selectedplayer.team.splice(getIndex(selectedplayer.div));
        console.log('selected: ' + selectedplayer.div);//why is this an array
        team2.push(selectedplayer.div);
        selectedplayer.team = team2;
        deselect();
        
    }
    renderPlayers();
});