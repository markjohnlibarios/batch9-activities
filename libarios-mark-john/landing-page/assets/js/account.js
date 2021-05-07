/**check if session alive**/
if (localStorage.getItem('KBP_login') === null) {
    window.location.href = 'login.html';
} /*else {
    window.location.href = 'account.html';
}*/

/***************************************************** */

/**progress bar**/
window.onscroll = function() {progressBar()};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("load-bar").style.width = scrolled + "%";

    const header = document.querySelector("header");
    const progress = document.querySelector("#account-progress");

    if (scrolled > 10){
        progress.classList.add("progress-container");
    } else {
        progress.classList.remove("progress-container");
    }
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