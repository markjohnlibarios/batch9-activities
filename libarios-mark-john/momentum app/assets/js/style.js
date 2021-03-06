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
var quoteHeader = document.querySelector('#quote-header');
var quoteViewList = document.querySelector('#quote-view');
var quoteList = document.querySelector('#quote-list');
var quoteView = document.querySelector('.quote');
var authorView = document.querySelector('.author');
var randomQuotes = document.querySelector('#quotes');
var newQuoteTitle = document.querySelector('#new-quotes');
var newQuoteAuthor = document.querySelector('#new-quotes-author');
var weather = document.querySelector('#weather');
var goalLogo = document.querySelector('#goal-logo');
var closeModal = document.querySelector('#close-overlay');
var newGoal = document.querySelector('#goal-type');
var goalView = document.querySelector('#goal-view');
var currentMainGoal = document.querySelector('#current-goal');
var goalDiv = document.querySelector('#todays-goal-list');

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
            {
                "id": 4,
                "todoTask": "Create new method for quotes"
            },
        ]
};

var objQuotes = {
    "quotes":
        [
            {
                "id": 1,
                "quote": "Yesterday is a history, Tomorrow will is a mystery, and today is a gift, that's why it's call present.",
                "author": "Master Oogway"
            },
            {
                "id": 2,
                "quote": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon"
            },
            {
                "id": 3,
                "quote": "You only live once, but if you do it right, once is enough.",
                "author": "Mae West"
            },
            {
                "id": 4,
                "quote": "The purpose of our lives is to be happy.",
                "author": "Dalai Lama"
            },
            {
                "id": 5,
                "quote": "Get busy living or get busy dying.",
                "author": "Stephen King"
            },
            {
                "id": 6,
                "quote": "Many of life???s failures are people who did not realize how close they were to success when they gave up.",
                "author": "Thomas A. Edison"
            }
        ]
};

var objWeather = {
    "weather":
        [
            {
                "id": 1,
                "weather": "Smoggy",
                "icon": "weather fas fa-smog",
                "degree": "29??c"
            },
            {
                "id": 2,
                "weather": "Partly Rain",
                "icon": "weather fas fa-cloud-rain",
                "degree": "22??c"
            },
            {
                "id": 3,
                "weather": "Windy",
                "icon": "weather fas fa-wind",
                "degree": "25??c"
            },
            {
                "id": 4,
                "weather": "Thunderstorm",
                "icon": "weather fas fa-bolt",
                "degree": "23??c"
            },
            {
                "id": 5,
                "weather": "Clear Sky",
                "icon": "weather fas fa-cloud",
                "degree": "26??c"
            },
            {
                "id": 6,
                "weather": "Heavy Rain",
                "icon": "weather fas fa-cloud-showers-heavy",
                "degree": "20??c"
            }
        ]
}

var objGoal = {
    "goal":
        [
            {
                "id": 1,
                "goal": "Create new page",
                "status": 1,
                "dateFinished": "21 May 2021"
            },
            {
                "id": 2,
                "goal": "Refactor",
                "status": 0,
                "dateFinished": 0
            },
            {
                "id": 3,
                "goal": "Create test data",
                "status": 0,
                "dateFinished": 0
            },
            {
                "id": 4,
                "goal": "Simulate",
                "status": 1,
                "dateFinished": "21 May 2021"
            },
            {
                "id": 5,
                "goal": "Check methods",
                "status": 1,
                "dateFinished": "21 May 2021"
            },
        ]
}

localStorage.setItem('timeFormat', 24);

window.addEventListener('click', function(e) {   
    if (!document.getElementById('todo-list').contains(e.target)) {
        todoList.classList.remove('slide-in');
    }

    if (!document.getElementById('quote-list').contains(e.target)) {
        quoteList.classList.remove('slide-in');
    }
}, true);

closeModal.click();

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
            displayRandomQuote();
            quotesList();
            displayRandomWeather();
            goalList();
            currentGoal();
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
    var date = new Date();
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
            if (objTodo.todo.length > 0) {
                var lastTodoItem = objTodo.todo.length -1;
                var newTodoId = objTodo.todo[lastTodoItem].id + 1;
            } else {
                var newTodoId = 1;
            }
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
                objTodo.todo.splice(i, 1);
                break;
            }
        }
        todoListTask();
    });

}

//------------------------------------------------------
//display todo list from declared todo object
function todoListTask() {
    todoView.innerHTML = '';
    for (var key in objTodo.todo) {
        var taskWrapper = document.createElement('div');
        var taskTitle = document.createElement('span');
        var taskDeleteYes = document.createElement('i');
        var taskDeleteNo = document.createElement('i');
        var taskDelete = document.createElement('i');

        taskWrapper.setAttribute('class', 'task-wrapper');
        taskTitle.setAttribute('class', 'task-title');
        taskDeleteYes.setAttribute('id', 'yes-todo-' + objTodo.todo[key].id);
        taskDeleteYes.setAttribute('class', 'fas fa-check-double todo-icon gi-todo-check delete' + objTodo.todo[key].id);
        
        taskDeleteNo.setAttribute('id', 'no-todo-' + objTodo.todo[key].id);
        taskDeleteNo.setAttribute('class', 'far fa-times-circle todo-icon gi-todo-cancel delete' + objTodo.todo[key].id);
        taskDelete.setAttribute('id', 'delete' + objTodo.todo[key].id);
        taskDelete.setAttribute('class', 'far fa-trash-alt');
        taskDelete.setAttribute('onclick', 'todoDelete(' + objTodo.todo[key].id +')')

        taskTitle.appendChild(document.createTextNode(objTodo.todo[key].todoTask));

        taskWrapper.appendChild(taskTitle);
        taskWrapper.appendChild(taskDeleteYes);
        taskWrapper.appendChild(taskDeleteNo);
        taskWrapper.appendChild(taskDelete);
        todoView.appendChild(taskWrapper);
    }
}
//------------------------------------------------------
//randomize quote

function displayRandomQuote() {
    if (objQuotes.quotes.length > 0) {
        var keys = Object.keys(objQuotes.quotes);
        var randomKey = keys[Math.floor(Math.random()*keys.length)];
        var randomValue = objQuotes.quotes[randomKey];

        quoteView.innerHTML = randomValue.quote;
        authorView.innerHTML = '??? ' + randomValue.author;
    } else {
        return false;
    }
}
//------------------------------------------------------
//select quote

function displaySelectedQuote(key) {
    quoteView.innerHTML = objQuotes.quotes[key].quote;
    authorView.innerHTML = '??? ' + objQuotes.quotes[key].author;
}

//------------------------------------------------------
//display random quote

randomQuotes.addEventListener('click', displayRandomQuote);

//------------------------------------------------------
//show todo list
quoteHeader.addEventListener('click', function() {
    quoteList.classList.add('slide-in');
    newQuoteTitle.value = '';
    newQuoteAuthor.value = '';
});

//------------------------------------------------------
//new quotes

newQuoteTitle.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (newQuoteTitle.value != '' && newQuoteAuthor.value != ''){
            newQuote(newQuoteTitle.value, newQuoteAuthor.value);
        }
    }
});

newQuoteAuthor.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (newQuoteTitle.value != '' && newQuoteAuthor.value != ''){
            newQuote(newQuoteTitle.value, newQuoteAuthor.value);
        }
    }
});

function newQuote(quote, author) {
    if (objQuotes.quotes.length > 0) {
        var lastQuoteItem = objQuotes.quotes.length -1;
        var newQuoteId = objQuotes.quotes[lastQuoteItem].id + 1;
    } else {
        var newQuoteId = 1;
    }
    var myNewQuote = {
        "id": newQuoteId,
        "quote": quote,
        "author": author
    };

    objQuotes["quotes"].push(myNewQuote);

    newQuoteTitle.value = '';
    newQuoteAuthor.value = '';
    quotesList();
    displayRandomQuote();
}

//------------------------------------------------------
//fire quote delete

function quoteDelete(item) {
    document.querySelector('#deleteQuote' + item).classList.add('hidden');

    document.querySelectorAll('.deleteQuote' + item)[0].classList.add('block');
    document.querySelectorAll('.deleteQuote' + item)[1].classList.add('block');

    document.querySelector('#no-quote-' + item).addEventListener('click', function(){
        document.querySelectorAll('.deleteQuote' + item)[0].classList.remove('block');
        document.querySelectorAll('.deleteQuote' + item)[1].classList.remove('block');
        document.querySelector('#deleteQuote' + item).classList.remove('hidden');
    });

    document.querySelector('#yes-quote-' + item).addEventListener('click', function(){

        for (let i = 0; i < objQuotes.quotes.length; i++) {
            if ( objQuotes.quotes[i].id == item ) {
                //index = i;
                objQuotes.quotes.splice(i, 1);
                break;
            }
        }
        quotesList();
        displayRandomQuote();
    });

}

//------------------------------------------------------
//display quotes from declared quotes object

function quotesList() {
    quoteViewList.innerHTML = '';
    for (var key in objQuotes.quotes) {
        var taskWrapper = document.createElement('div');
        var taskTitle = document.createElement('span');
        //var taskDeleteYes = document.createElement('label');
        //var taskDeleteNo = document.createElement('label');
        var taskDeleteYes = document.createElement('i');
        var taskDeleteNo = document.createElement('i');
        var taskDelete = document.createElement('i');

        taskWrapper.setAttribute('class', 'quote-wrapper');
        taskTitle.setAttribute('class', 'quote-title');
        taskTitle.setAttribute('onclick', 'displaySelectedQuote(' + key + ')');
        taskDeleteYes.setAttribute('id', 'yes-quote-' + objQuotes.quotes[key].id);
        taskDeleteYes.setAttribute('class', 'fas fa-check-double todo-icon gi-todo-check deleteQuote' + objQuotes.quotes[key].id);
        taskDeleteNo.setAttribute('id', 'no-quote-' + objQuotes.quotes[key].id);
        taskDeleteNo.setAttribute('class', 'far fa-times-circle todo-icon gi-todo-cancel deleteQuote' + objQuotes.quotes[key].id);
        taskDelete.setAttribute('id', 'deleteQuote' + objQuotes.quotes[key].id);
        taskDelete.setAttribute('class', 'far fa-trash-alt');
        taskDelete.setAttribute('onclick', 'quoteDelete(' + objQuotes.quotes[key].id +')')

        taskTitle.appendChild(document.createTextNode(objQuotes.quotes[key].quote));

        taskWrapper.appendChild(taskTitle);
        taskWrapper.appendChild(taskDeleteYes);
        taskWrapper.appendChild(taskDeleteNo);
        taskWrapper.appendChild(taskDelete);
        quoteViewList.appendChild(taskWrapper);
    }
}

//------------------------------------------------------
//random weather quote

function displayRandomWeather() {
    var weatherIcon = document.createElement('i');
    var weatherDegree = document.createElement('i');
    var weatherDescription = document.createElement('i');

    var keys = Object.keys(objWeather.weather);
    var randomKey = keys[Math.floor(Math.random()*keys.length)];
    var randomValue = objWeather.weather[randomKey];


    weatherIcon.setAttribute('class', randomValue.icon);
    weather.appendChild(weatherIcon);
    weatherDegree.setAttribute('class', 'degree');
    weatherDegree.appendChild(document.createTextNode('   ' + randomValue.degree));
    weather.appendChild(weatherDegree);
    weatherDescription.setAttribute('class', 'weather-description');
    weatherDescription.appendChild(document.createTextNode('   ' + randomValue.weather));
    weather.appendChild(weatherDescription);
}

//------------------------------------------------------
//goal
goalLogo.addEventListener('click', function() {
    document.getElementsByTagName('footer')[0].style.opacity = '0.1';
});

closeModal.addEventListener('click', function() {
    document.getElementsByTagName('footer')[0].style.transition = 'all ease 1s';
    document.getElementsByTagName('footer')[0].style.opacity = '1';
});

//------------------------------------------------------
//new goal
newGoal.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (newGoal.value != ''){
            if (objGoal.goal.length > 0) {
                var lastGoalItem = objGoal.goal.length -1;
                var newGoalId = objGoal.goal[lastGoalItem].id + 1;
            } else {
                var newGoalId = 1;
            }
            var myNewGoal = {
                "id": newGoalId,
                "goal": newGoal.value,
                "status": 0,
                "dateFinished": 0
            };
        
            objGoal["goal"].push(myNewGoal);
        
            newGoal.value = '';
            goalList();
            currentGoal();
        }
    }
});

//------------------------------------------------------
//fire goal delete

function goalDelete(item) {
    document.querySelector('#deleteGoal' + item).classList.add('hidden');

    document.querySelectorAll('.deleteGoal' + item)[0].classList.add('block');
    document.querySelectorAll('.deleteGoal' + item)[1].classList.add('block');

    document.querySelector('#no-goal-' + item).addEventListener('click', function(){
        document.querySelectorAll('.deleteGoal' + item)[0].classList.remove('block');
        document.querySelectorAll('.deleteGoal' + item)[1].classList.remove('block');
        document.querySelector('#deleteGoal' + item).classList.remove('hidden');
    });

    document.querySelector('#yes-goal-' + item).addEventListener('click', function(){

        for (let i = 0; i < objGoal.goal.length; i++) {
            if ( objGoal.goal[i].id == item ) {
                //index = i;
                objGoal.goal.splice(i, 1);
                break;
            }
        }
        goalList();
        currentGoal();
    });

}

//------------------------------------------------------
//goal list
function goalList() {
    goalView.innerHTML = '';
    const onGoingGoal = objGoal.goal.filter((goal) =>{
        return goal.status == 0;
    });
    goalChecking(onGoingGoal);

    const archivedGoal = objGoal.goal.filter((goal) =>{
        return goal.status == 1;
    });
    goalChecking(archivedGoal);
}

function goalChecking(goalStatus) {
    goalStatus.forEach((goal) => {
        var goalWrapper = document.createElement('div');
        var goalTitle = document.createElement('span');
        var goalDeleteYes = document.createElement('i');
        var goalDeleteNo = document.createElement('i');
        var goalDelete = document.createElement('i');

        goalWrapper.setAttribute('class', 'goal-wrapper');
        goalTitle.setAttribute('class', 'goal-title');
        goalDeleteYes.setAttribute('id', 'yes-goal-' + goal.id);
        goalDeleteYes.setAttribute('class', 'fas fa-check-double goal-icon gi-goal-check deleteGoal' + goal.id);
        goalDeleteNo.setAttribute('id', 'no-goal-' + goal.id);
        goalDeleteNo.setAttribute('class', 'far fa-times-circle goal-icon gi-goal-cancel deleteGoal' + goal.id);
        goalDelete.setAttribute('id', 'deleteGoal' + goal.id);
        goalDelete.setAttribute('class', 'far fa-trash-alt');
        goalDelete.setAttribute('onclick', 'goalDelete(' + goal.id +')')

        goalTitle.appendChild(document.createTextNode(goal.goal));

        if (goal.status == 1){
            var lineBreak = document.createElement('br');
            var goalFinised = document.createElement('small');
            goalFinised.setAttribute('class', 'date-finished');
            goalFinised.appendChild(document.createTextNode(goal.dateFinished));
            goalTitle.appendChild(lineBreak);
            goalTitle.appendChild(goalFinised);
        }

        goalWrapper.appendChild(goalTitle);
        goalWrapper.appendChild(goalDeleteYes);
        goalWrapper.appendChild(goalDeleteNo);
        if (goal.status != 1) {
            goalWrapper.appendChild(goalDelete);
        }
        goalView.appendChild(goalWrapper);
    });
    
}

//------------------------------------------------------
//display current goal
function currentGoal() {
    goalDiv.innerHTML = '';
    const currentGoal = objGoal.goal.find((goal) =>{
        return goal.status === 0;
    });
    var mainGoalDone = document.createElement('i');
    var goal = document.createElement('i');
    var goalLabel = document.createElement('p');

    goal.setAttribute('class', 'current-goal');

    if (currentGoal != undefined){
        mainGoalDone.setAttribute('onclick', 'mainGoalDone(' + currentGoal.id + ')');
        mainGoalDone.setAttribute('class', 'fas fa-check-double goal-icon gi-check');

        goal.innerHTML = "??? " + currentGoal.goal + " ???";
        goalLabel.appendChild(document.createTextNode("???TODAY'S GOAL"));

        goalDiv.appendChild(goal);
        goalDiv.appendChild(mainGoalDone);
        goalDiv.appendChild(goalLabel);
    } else {
        goal.innerHTML = "??? No goal for today ???";
        goal.style.cursor = "auto";
        goalDiv.appendChild(goal);
    }
}


function mainGoalDone(id){
    var goalFinishedDate = new Date();
    var dateFinished = goalFinishedDate.getDate() + " " + monthList[goalFinishedDate.getMonth()] + " " + goalFinishedDate.getFullYear();
    for (let i in objGoal.goal) {
        if (objGoal.goal[i].id === id) {
            objGoal.goal[i].status = 1;
            objGoal.goal[i].dateFinished = dateFinished;
            goalList();
            currentGoal();
            break;
        }
    }
}