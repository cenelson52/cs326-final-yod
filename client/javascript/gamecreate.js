'use strict'



const stats = []; //strings with stat names


document.getElementById('addstatbtn').addEventListener('click', () => {
    const statname = document.getElementById('stat-input').value;
    if(statname === ''){
        alert('no stat name entered');
    }else{
        const statdiv = document.createElement('div');
        statdiv.innerText = statname;
        statdiv.classList.add('custom-stats');
        document.getElementById('stats').appendChild(statdiv);
        document.getElementById('stat-input').value = '';
        stats.push(statname);
    }
});

document.getElementById('newgamebtn').addEventListener('click', () => {
    const game = {}
    const name = document.getElementById('name').value;
    const desc = document.getElementById('description').value
    if(name === ''){
        alert('no name entered');
    }else{
        game['name'] = name;
        game['description'] = desc;
        game['custom-stats'] = stats;
        game['players'] = [];
        console.log(game);

        //this is where the game will be saved into db
        window.location.href = "/game.html";
    }
    
});