'use strict'

document.getElementById('create-account').addEventListener('click', () => {
    if(document.getElementById("account-username").value === '' ){
        alert('No username entered!');
        return;
    }//need some way to check if there's already an account with this username
    else if(document.getElementById("account-password").value === ''){
        alert('No password entered!');
        return;
    }
    else if(! document.getElementById("account-password").value === document.getElementById("account-confirm-password").value){
        alert('Passwords must match');
        return;
    }
    else if(document.getElementById("account-email").value === ''){
        alert('No email entered');
        return;
    }
    else if(document.getElementById("account-email").value === document.getElementById("account-confirm-email").value){
        alert('Emails must match');
        return;
    }
    else if(document.getElementById("account-DoB") === ''){
        alert('No birthday entered');
        return;
    }
    else{
        const account = {};
        account['username'] = document.getElementById("account-username").value;
        account['password'] = document.getElementById("account-password").value;
        account['email'] = document.getElementById("account-email").value;
        account['birthday'] = document.getElementById("account-DoB").value;
        // this is where we save the account into the db
    }
    //auto-redirect to the account view page somehow
});