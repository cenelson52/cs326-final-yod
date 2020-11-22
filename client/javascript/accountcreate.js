'use strict'

// const accountlist = await fetch("/account");
// if (!accountlist.ok) {
//     console.log(accountlist.error);
//     return;
// }

document.getElementById('create-account').addEventListener('click', async () => {
    
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
         
        for(let i = 0; i < accountlist.length; ++i){
            if(document.getElementById("account-username").value === accountlist[i].username){
                alert('Username already exists!');
                return;
             }
             if(document.getElementById("account-email").value === accountlist[i].email){
                alert('Email already being used!');
                return;
             }
         }
        
        
        const account = {};
        account['username'] = document.getElementById("account-username").value;
        account['password'] = document.getElementById("account-password").value;
        account['email'] = document.getElementById("account-email").value;
        account['birthday'] = document.getElementById("account-DoB").value;
        // this is where we save the account into the db
        
        const response = await fetch('/createaccount', {
            method: 'POST',
            body: JSON.stringify({
                username: account['username'],
                password: account['password'],
                email: account['email'],
                DoB: account['birthday']
            })
         });
        
         if (!response.ok) {
            console.error(`Error in accountcreate.js storing into database.`);
         }
        
    }
    //auto-redirect to the account view page somehow
});
