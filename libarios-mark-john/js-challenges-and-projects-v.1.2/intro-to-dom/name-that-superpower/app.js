var clickh1 = document.getElementById('click');

var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var ul = document.getElementById('league');

for(let i = 0; i < justiceLeague.length; i ++){
    var li = document.createElement("LI");
    li.setAttribute("class", 'superhero');
    li.textContent  = justiceLeague[i].name + ' \u00bb ' + justiceLeague[i].superpower;
    ul.appendChild(li); 
}

function keyPress(e){
    alert("You pressed " + String.fromCharCode(e.keyCode).toUpperCase());
}

window.addEventListener("keypress", keyPress);
clickh1.addEventListener('click', function(){
    clickh1.textContent += ' Clicked';
});
clickh1.addEventListener("mouseover", function(){
    clickh1.style.backgroundColor = 'red';
});