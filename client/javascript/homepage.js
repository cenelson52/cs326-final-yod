/*
'use strict'

//not entirely sure what to do with the searchbar

const matches = **HOWEVER WE GET A LIST OF RECENT MATCHES**

const games = **However we get a list of all games**

function renderGames(element){
    for(const x in games){
        const newDiv = document.createElement("div");
        newDiv.addClass(game-list-item);
        newDiv.innerHTML = x.name;
        element.appendItem(newDiv);
        //use document.addEventListener in order to add a link to each item that will take you to the game page
    }
}

function renderMatches(element){
    for(const x in matches){
        const newDiv = document.createElement("div");
        newDiv.addClass(game-list-item);
        newDiv.innerHTML = "${x.name} : ${x.team-1-score} - ${x.team-2-score}"
        //use document.addEventListener in order to add a link to each item that will take you to the match page
    }
}

window.onload(()=>
    renderGames(document.getElementById("fullgamelist"));
    renderMatches(document.getElementById("resultgamelist"));
);
*/