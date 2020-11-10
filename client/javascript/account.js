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

//using first account entry. Will get an error if null.
window.onload = function(() => 
    document.getElementById('username').innerHTML = response[0].username;
    document.getElementById('email').innerHTML = response[0].email;
    document.getElementById('DoB').innerHTML = response[0].DoB;
);
