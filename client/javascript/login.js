'use strict'



document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === ''){
        alert('No username entered');
        return;
    }
    if(password === ''){
        alert('No password entered');
        return;
    }
    //server stuff
    //route to homepage
});

document.getElementById('signup-btn').addEventListener('click', async () => {
    window.location.href = "/accountcreate.html";

});