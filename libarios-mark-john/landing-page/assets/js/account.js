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
    let confirmation = confirm("Are you sure to logout?");

    if (confirmation) {
        localStorage.removeItem("KBP_username");
        localStorage.removeItem("KBP_login");
        window.location.href = 'login.html';
    }

});


/***************************************************** */

/**account img**/

var savings = document.getElementById("savings-tbl");
var onlineShop = document.getElementById("online-shop-tbl");
var cards = document.getElementById("cards-tbl");
var savingDescription = document.getElementById("saving-description");
var onlineDescription = document.getElementById("online-description");
var cardDescription = document.getElementById("card-description");

document.querySelector('#saving-img').addEventListener('click', function() {

    savings.style.display = 'block';
    onlineShop.style.display = 'none';
    cards.style.display = 'none';
    savingDescription.style.color = '#28a745';
    onlineDescription.style.color = '#000';
    cardDescription.style.color = '#000';

});

document.querySelector('#online-img').addEventListener('click', function() {

    savings.style.display = 'none';
    onlineShop.style.display = 'block';
    cards.style.display = 'none';
    savingDescription.style.color = '#000';
    onlineDescription.style.color = '#28a745';
    cardDescription.style.color = '#000';

});

document.querySelector('#cards-img').addEventListener('click', function() {

    savings.style.display = 'none';
    onlineShop.style.display = 'none';
    cards.style.display = 'block';
    savingDescription.style.color = '#000';
    onlineDescription.style.color = '#000';
    cardDescription.style.color = '#28a745';

});