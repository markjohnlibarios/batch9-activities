/**forms events**/
var loginForm = document.getElementById("form");
var regForm = document.getElementById("reg-form");
var indicator = document.getElementById("indicator");

function register(){
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}


/***************************************************** */

/**local JSON database**/

localStorage.setItem('account_DB_observer', 1);
var account_DB_observer = localStorage.getItem('account_DB_observer');

//alert(account_DB_observer);
if (account_DB_observer != 1){
    var obj = {
        "account":
            [
                {
                    "id": "1",
                    "username": "mark",
                    "email": "mark@gmail.com",
                    "password": "12345"
                },
                {
                    "id": "2",
                    "username": "john",
                    "email": "john@gmail.com",
                    "password": "12345"
                },
                {
                    "id": "3",
                    "username": "test",
                    "email": "test@gmail.com",
                    "password": "12345"
                },
            ]
    };
}

localStorage.setItem('account_DB', JSON.stringify(obj));

var objRet = JSON.parse(localStorage.getItem('account_DB'));
/*var myNewObj = {
    "title": "HTML / CSS / JS",
    "authors": [
        "Mark Libarios"
    ],
    "edition": 1,
    "year": 2021
};*/
//objRet["account"].push(myNewObj);

//localStorage.setItem('account_DB', JSON.stringify(objRet));

//console.log(objRet);
//alert(objRet.cars['Nissan'][0].model + ' ' + objRet.cars['Nissan'][0].doors);
//alert(objRet.account[3].authors);

/**registration**/
document.querySelector('#reg-submit').addEventListener('click', function() {
    var isValid = document.querySelector('#reg-form').reportValidity();
    var username = $('#reg-username').val();
    var email = $('#reg-email').val();
    var password = $('#reg-password').val();
    var counter = 0;
    var id = 0;

    if (isValid){
        for (var key in objRet.account) {
            id++;
            if (objRet.account[key].username == username){
                counter++;
            }
        }

        if (counter > 0){
            alert('Conflict');
            event.preventDefault();
        } else {
            var myNewObj = {
                "id": id + 1,
                "username": username,
                "email": email,
                "password": password
            };

            objRet["account"].push(myNewObj);
            localStorage.setItem('account_DB', JSON.stringify(objRet));
            $("reg-form").reset();
            event.preventDefault();
        }
    } 
});