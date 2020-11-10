/*
'use strict'

const account = however-we-get-the-account;

window.onload = function(() => 
    document.getElementById('username').innerHTML = account.username;
    document.getElementById('email').innerHTML = account.email;
    document.getElementById('DoB').innerHTML = account.DoB;
);
*/

strict;

//ALTERNATIVE?
const response = await fetch("/account");
if (!response.ok) {
    console.log(response.error);
    return;
}

window.onload = function(() => 
    document.getElementById('username').innerHTML = response.username;
    document.getElementById('email').innerHTML = response.email;
    document.getElementById('DoB').innerHTML = response.DoB;
);
