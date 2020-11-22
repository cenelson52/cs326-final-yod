'use strict'


window.addEventListener("load", async function () {

    const matches = await fetch("/match");

    const games = await fetch("/getgames");
    console.log('run?');
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
            newDiv.innerHTML = "${x.name} : ${x.team-1-score} - ${x.team-2-score}";
            //use document.addEventListener in order to add a link to each item that will take you to the match page
            newDiv.addEventListener('click', () => {
                //needs to include info about which game was clicked
                window.location.href = "/game.html";
            })
        }
    }

    document.getElementById('newgamebtn').addEventListener('click', () => {
        window.location.href = "/gamecreate.html";
    })

    //commented out because defer is being used
    //window.onload(()=> {
    renderGames(document.getElementById("fullgamelist"));
    renderMatches(document.getElementById("resultgamelist"));
    //});
});