'use strict'
//in place of actually fetching the data
//const game = games[0];

const game = games[0];
const availplayers = game.players;
const teams = [[],[],[]];
let selectedplayer = {'player' : null,'div' : null, 'team' : null}; //0 = no team, else its team #


function buildPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('player');
    div.classList.add('row-4');
    div.classList.add('unselected');
    div.setAttribute('id', player.name);
    div.innerText = player.name;
    div.innerHTML += '  -  wins : ' + player.wins + ' | losses : ' + player.losses ;
    
    return div;
}
function buildTeamPlayerDiv(player){
    const div = document.createElement('div');
    div.classList.add('team-player');
    div.classList.add('row-4');
    div.innerText = player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
    //stats.innerHTML += 'wins : ' + player.wins + ' | losses : ' + player.losses + '<br>';
    stats.innerHTML += '|';
    for(let i in player.stats){
        stats.innerHTML += ( i + ' : ' + player.stats[i] + '|');
    }
    div.appendChild(stats);
    

    return div;
}

 for(let i in availplayers){
     teams[0].push(availplayers[i]);
 }

function renderPlayers(){
    teams[0] = fillgaps(teams[0]);
    document.getElementById('playerlist').innerHTML = '';
    document.getElementById('team1').innerHTML = '';
    document.getElementById('team2').innerHTML = '';
    // document.getElementById('team1').innerHTML = '';
    // document.getElementById('team2').innerHTML = '';

    printTeam(teams[0]);
    printTeam(teams[1]);
    for(let i in teams[0]){
        //console.log(team0[i]);
        document.getElementById('playerlist').appendChild(buildPlayerDiv(teams[0][i]));
    }
    for(let j = 1; j <=2; j++){
        for(let i in teams[j]){
            document.getElementById('team' + j).appendChild(buildTeamPlayerDiv(teams[j][i]));
        }
    }
    addSelection();
}

renderPlayers();


function addSelection(){
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
}

function getIndex(array, el){
    for(let i in array){
        if(array[i] === el){
            return i;
        }
    }
    return -1;
}


//debuging functions
function pts(){
    // console.log('team0: ' + team0.length+ ' '+ team0);
    // console.log('team1: ' +  team1.length+ ' '+team1);
    // console.log('team2: ' +  team2.length+ ' '+team2);
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
        return teams[0];
    }
    if(parent === document.getElementById('team1')){
        return teams[1];
    }
    if(parent === document.getElementById('team2')){
        return teams[2];
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
function getPfromDiv(div){
    for(let i in availplayers){
        if(availplayers[i].name === div.id){
            return availplayers[i];
        }
    }
    return null;
}
function fillgaps(arr){
    const r = [];
    for(let i in arr){
        if(arr[i] !== null){
            r.push(arr[i]);
        }
    }
    return r;
}

document.getElementById('team1').addEventListener('click', () => {
    if(selectedplayer.div !== null){
        const pl = getPfromDiv(selectedplayer.div);
        teams[0][getIndex(teams[0], pl)] = null;
        teams[1].push(pl);
        deselect();
    }
    renderPlayers();
});

document.getElementById('team2').addEventListener('click', () => {
    if(selectedplayer.div !== null && selectedplayer.team !== teams[2]){
        const pl = getPfromDiv(selectedplayer.div);
        teams[0][getIndex(teams[0], pl)] = null;
        teams[2].push(pl);
        deselect();
    }
    renderPlayers();
});

document.getElementById('submit').addEventListener('click', () => {
    const match = {
        'match-notes' : document.getElementById('notes').value,
        'team1' : {},
        'team2' : {}
    };
    if(document.getElementById('team-1-won').checked){
        
    }
});