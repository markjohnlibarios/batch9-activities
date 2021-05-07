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

/**progress bar**/
window.onscroll = function() {progressBar()};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("load-bar").style.width = scrolled + "%";

    const header = document.querySelector("header");
    const progress = document.querySelector("#progress");

    if (scrolled > 10){
        header.classList.add("nav-scrolled");
        progress.classList.add("progress-container");
    } else {
        header.classList.remove("nav-scrolled");
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

/***************************************************** */

/**fade-in content**/

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

/***************************************************** */