const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var counter = 0;
function moveRobot() {
    //add code here
    //alert(var1);
    counter = counter + 10;
    robot.style.left = counter + "px";
    
}

robot.addEventListener('click', moveRobot);
//robot.addEventListener('click', e => moveRobot(e, 'var1'))

/** prepared for right click event
 * function moveRobot(e) {
    //add code here
    e.preventDefault();
    counter = counter + 10;
    if(e.which === 3){
        robot.style.left = counter + "px";
        console.log('right' + counter);
    }

    if(e.which === 1){
        robot.style.right = counter + "px";
        console.log('left' + counter);
    }
    
    //robot.style.left = counter + "px";
    
}

robot.addEventListener('click', moveRobot);
robot.addEventListener('contextmenu', moveRobot);
 * **/