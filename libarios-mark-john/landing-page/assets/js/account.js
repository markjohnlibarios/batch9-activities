/**toggle menu event**/
var navItems = document.getElementById("nav-items");
navItems.style.maxHeight = "0px";

function menutoggle(){
    if(navItems.style.maxHeight == "0px"){
        navItems.style.maxHeight = "200px";
    } else {
        navItems.style.maxHeight = "0px";
    }
}

/***************************************************** */

/**check if session alive**/
if (localStorage.getItem('KBP_login') === null) {
    window.location.href = 'login.html';
}

/***************************************************** */

/**login**/
document.querySelector('#account').addEventListener('click', function() {

    if (localStorage.getItem('KBP_login') === null) {
        window.location.href = 'login.html';
    } else {
        window.location.href = 'account.html';
    }

});

/***************************************************** */

/**get credential**/
var greeting = document.getElementById("welcome");
greeting.innerHTML = "Welcome " + localStorage.getItem('KBP_username').toUpperCase() + "!";

/***************************************************** */

/**logout**/
document.querySelector('#logout').addEventListener('click', function() {

    localStorage.removeItem("KBP_username");
    localStorage.removeItem("KBP_login");
    window.location.href = 'login.html';

});