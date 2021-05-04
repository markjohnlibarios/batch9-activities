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

window.onscroll = function() {progressBar()};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("load-bar").style.width = scrolled + "%";
}