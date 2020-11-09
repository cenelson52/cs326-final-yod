'use strict'

document.getElementById('create-tourney').addEventListener('click', () => {
    if(document.getElementById("team-count").value < 2 ){
       alert('Too few teams!');
       return;
    }
    else{
      //TODO: Generates results
    }
});
