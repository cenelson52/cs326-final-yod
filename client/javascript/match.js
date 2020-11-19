'use strict'
//in place of actually fetching the data
//const game = games[0];

const game = games[0];
const availplayers = game.players;
const teams = [[],[],[]];
let selectedplayer = {'player' : null,'div' : null, 'team' : null}; //0 = no team, else its team #i


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
    div.setAttribute('id', player.name);
    div.innerText = player.name;
    const stats = document.createElement('div');
    stats.classList.add('player-stats');
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

    for(let i in teams[0]){
        document.getElementById('playerlist').appendChild(buildPlayerDiv(teams[0][i]));
    }
    for(let j = 1; j <=2; j++){
        for(let i in teams[j]){
            document.getElementById('team' + j).appendChild(buildTeamPlayerDiv(teams[j][i]));
        }
    }
    addSelection();
    addTeamPlListener();
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

//debug function
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

function getTPfromDiv(div){
    for(let j = 1; j <3; j++){
        for(let i in teams[j]){
            if(teams[j][i].name === div.id){
            return teams[j][i];
            }
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

function matchPl(player){
    const r = {};
    r['name'] = player.name;
    r['stats'] = {};
    for(let i in game['custom-stats']){
        r['stats'][game['custom-stats'][i]] = 0;
    }
    return r
}

document.getElementById('team1').addEventListener('click', () => {
    if(selectedplayer.div !== null){
        const pl = getPfromDiv(selectedplayer.div);
        teams[0][getIndex(teams[0], pl)] = null;
        teams[1].push(matchPl(pl));
        deselect();
    }
    renderPlayers();
});

document.getElementById('team2').addEventListener('click', () => {
    if(selectedplayer.div !== null && selectedplayer.team !== teams[2]){
        const pl = getPfromDiv(selectedplayer.div);
        teams[0][getIndex(teams[0], pl)] = null;
        teams[2].push(matchPl(pl));
        deselect();
    }
    renderPlayers();
});

let toEdit = null;//player type
function addTeamPlListener(){
    const teamPl = document.getElementsByClassName('team-player');

    for(let i = 0; i < teamPl.length; i++){
        teamPl[i].addEventListener('click', () => {
            toEdit = getTPfromDiv(teamPl[i]);
            document.getElementById('stat-space').innerHTML = teamPl[i].id + "<br>";
            for(let j in game['custom-stats']){
                document.getElementById('stat-space').innerHTML += "<label for = '" + game['custom-stats'][j] +"-box' >" + game['custom-stats'][j] + "</label>";
                document.getElementById('stat-space').innerHTML += "<input type = 'number' id = '" + game['custom-stats'][j] +"-box' >";
            }
            document.getElementById('stat-space').innerHTML += "<br><input type = 'button' id = 'statUpdtBtn' class = 'btn btn-light'>Update</input>";
            document.getElementById('statUpdtBtn').addEventListener('click', () => {
                for(let j in game['custom-stats']){
                    const n = document.getElementById(game['custom-stats'][j] + '-box').value;
                    if(n !== ''){
                        toEdit.stats[game['custom-stats'][j]] = parseInt(n);
                    }
                }
                renderPlayers();
            });
        });
    }
}




document.getElementById('submit').addEventListener('click', () => {
    const team1score = document.getElementById('team-1-score').value;
    const team2score = document.getElementById('team-2-score').value;
    if(team1score === '' || team2score === ''){
        alert("Enter Score");
        return;
    }
    if(teams[1].length === 0 && teams[2].length === 0){
        alert('Empty Teams');
        return;
    }
    const match = {
        'match-notes' : document.getElementById('notes').value,
        'team1' : {
            'score' : team1score
        },
        'team2' : {
            'score' : team2score
        }
    };
    if(document.getElementById('team-1-won').checked){
        match.team1['won'] = true;
        match.team2['won'] = false;
    }else if(document.getElementById('team-2-won').checked){
        match.team2['won'] = true;
        match.team1['won'] = false;
    }else{
        alert('Did not select Winner');
        return;
    }
    match.team1['players'] = teams[1];
    match.team2['players'] = teams[2];
    //match object should be added to db and button should route back to game page
    console.log(match);
});


