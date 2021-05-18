var backgroundDiv = document.querySelector('.main');
var mainLogoContainer = document.querySelector("#logo-main");
var userInputName = document.querySelector('#users-name');
var topContent = document.querySelector("#top-content");
var userContent = document.querySelector("#user-content");
var userRequestName = document.querySelector("#request-name");
var greetings = document.querySelector("#greetings");
var quotes = document.querySelector("#quotes");
var currentDay = document.querySelector("#current-day");
var ampmFormat = document.querySelector('#ampm');
var clockHour = document.getElementById("clock");
var secondsHour = document.getElementById("seconds");
var timer = document.querySelector('#timer');
var todo = document.querySelector('#todo');
var todoList = document.querySelector('#todo-list');
var newTodo = document.querySelector('#new-todos');
var todoView = document.querySelector('#todo-view');

var name;
var customizedName;
var timeGreeting;
var todoDeleteId;

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var objTodo = {
    "todo":
        [
            {
                "id": 1,
                "todoTask": "Add javascript method to login function"
            },
            {
                "id": 2,
                "todoTask": "Add CRON"
            },
            {
                "id": 3,
                "todoTask": "Implement RBAC"
            },
        ]
};

localStorage.setItem('timeFormat', 24);

//event: body click
/*document.body.addEventListener('click', function(e){
    todoList.classList.remove('slide-in');
}, true);*/

window.addEventListener('click', function(e) {   
    if (!document.getElementById('todo-list').contains(e.target)) {
        todoList.classList.remove('slide-in');
    }
}, true);

//------------------------------------------------------

//event: create randomizer for image background display

backgroundDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/img/" + Math.floor(Math.random() * 11) + ".png)";

//------------------------------------------------------

//event when click the main logo

mainLogoContainer.addEventListener('click', function() {
    mainLogoContainer.classList.add('hidden');
    userRequestName.classList.add('block');
}, false);

//------------------------------------------------------

//input name

userInputName.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        var usersName = document.getElementById('users-name').value;
        if (usersName !== ''){
            name = usersName;

            /*** customized name */
            var splitStr = name.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            customizedName = splitStr.join(' ');
            /*** customized name */

            var dateGreetings = new Date();
            var hourGreetings = dateGreetings.getHours();
            if (hourGreetings < 12) {
                timeGreeting = "Good morning, ";
            } else if (hourGreetings < 18) {
                timeGreeting = "Good afternoon, ";
            } else {
                timeGreeting = "Good evening, ";
            }
            
            document.getElementById('users-name').value = '';
            userRequestName.classList.remove('block');
            topContent.classList.add('flex');
            userContent.classList.add('block');
            document.getElementsByTagName('footer')[0].classList.add('flex');
            quotes.classList.add('block');

            greetings.innerHTML = timeGreeting + customizedName + "!";
            currentDay.innerHTML = dateGreetings.getDate() + " " + monthList[dateGreetings.getMonth()] + " " + dateGreetings.getFullYear();

            currentTime();
            todoListTask();
        }
    }

    if (e.key === 'Escape' || e.keyCode === 27) {
        document.getElementById('users-name').value = '';

        mainLogoContainer.classList.remove('hidden');
        userRequestName.classList.remove('block');
    }
});

//------------------------------------------------------

//event clock

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var hour24Format = date.getHours();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    var ampm = hour24Format >= 12 ? 'PM' : 'AM';

    if (localStorage.getItem('timeFormat') == 12){
    hour = hour % 12;
    hour = hour ? hour : 12;
    ampmFormat.classList.add('block');
    } else {
    ampmFormat.classList.remove('block');
    }
    
    clockHour.innerText = hour + " : " + min;
    secondsHour.innerText = sec;
    ampmFormat.innerText = ampm;

    var t = setTimeout(function() {
                currentTime();
            }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

//------------------------------------------------------

//change time format 12/24

timer.addEventListener('click', function() {
    if (localStorage.getItem('timeFormat') == 24){
        localStorage.setItem('timeFormat', 12);
    } else {
        localStorage.setItem('timeFormat', 24);
    }
});

//------------------------------------------------------

//show todo list
todo.addEventListener('click', function() {
    todoList.classList.add('slide-in');
    newTodo.value = '';
});

//------------------------------------------------------

//new todo

newTodo.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (!newTodo.value == ''){
            var newTodoId = objTodo.todo.length + 1;
            var myNewTodo = {
                "id": newTodoId,
                "todoTask": newTodo.value
            };

            objTodo["todo"].push(myNewTodo);

            newTodo.value = '';
            todoListTask();
        }
    }
});

//------------------------------------------------------

//fire todo delete

function todoDelete(item) {
    document.querySelector('#delete' + item).classList.add('hidden');

    document.querySelectorAll('.delete' + item)[0].classList.add('block');
    document.querySelectorAll('.delete' + item)[1].classList.add('block');

    document.querySelector('#no-todo-' + item).addEventListener('click', function(){
        document.querySelectorAll('.delete' + item)[0].classList.remove('block');
        document.querySelectorAll('.delete' + item)[1].classList.remove('block');
        document.querySelector('#delete' + item).classList.remove('hidden');
    });

    document.querySelector('#yes-todo-' + item).addEventListener('click', function(){

        for (let i = 0; i < objTodo.todo.length; i++) {
            if ( objTodo.todo[i].id == item ) {
                //index = i;
                objTodo.todo.splice(i, 1);
                break;
            }
        }
        todoListTask();
    });

}

/*document.querySelector('#no-todo-1').addEventListener('click', function(){
    document.querySelector('#delete-1').classList.remove('block');
    //alert(todoDeleteId)
});*/

//------------------------------------------------------

//display todo list from declared todo object
function todoListTask() {
    todoView.innerHTML = '';
    for (var key in objTodo.todo) {
        var taskWrapper = document.createElement('div');
        var taskTitle = document.createElement('span');
        var taskDeleteYes = document.createElement('label');
        var taskDeleteNo = document.createElement('label');
        var taskDelete = document.createElement('i');

        taskWrapper.setAttribute('class', 'task-wrapper');
        taskTitle.setAttribute('class', 'task-title');
        taskDeleteYes.setAttribute('id', 'yes-todo-' + objTodo.todo[key].id);
        taskDeleteYes.setAttribute('class', 'button-confirm far btn-delete delete' + objTodo.todo[key].id);
        taskDeleteNo.setAttribute('id', 'no-todo-' + objTodo.todo[key].id);
        taskDeleteNo.setAttribute('class', 'button-confirm far btn-delete delete' + objTodo.todo[key].id);
        taskDelete.setAttribute('id', 'delete' + objTodo.todo[key].id);
        taskDelete.setAttribute('class', 'far fa-trash-alt');
        taskDelete.setAttribute('onclick', 'todoDelete(' + objTodo.todo[key].id +')')

        taskTitle.appendChild(document.createTextNode(objTodo.todo[key].todoTask));
        taskDeleteYes.appendChild(document.createTextNode('Yes'));
        taskDeleteNo.appendChild(document.createTextNode('No'));

        taskWrapper.appendChild(taskTitle);
        taskWrapper.appendChild(taskDeleteYes);
        taskWrapper.appendChild(taskDeleteNo);
        taskWrapper.appendChild(taskDelete);
        todoView.appendChild(taskWrapper);
    }
}

todoListTask();
//------------------------------------------------------