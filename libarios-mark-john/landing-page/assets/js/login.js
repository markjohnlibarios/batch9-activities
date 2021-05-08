/**forms events**/
var loginForm = document.getElementById("form");
var regForm = document.getElementById("reg-form");
var indicator = document.getElementById("indicator");

function register(){
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
    $('#reg-username').val('');
    $('#reg-email').val('');
    $('#reg-password').val('');
}

function login(){
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
    $('#username').val('');
    $('#password').val('');
}


/***************************************************** */

/**local JSON database**/

if (localStorage.getItem('KBP_accounts') === null) {
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

    localStorage.setItem('KBP_accounts', JSON.stringify(obj));
}

var objRet = JSON.parse(localStorage.getItem('KBP_accounts'));
var dangerColor = "#ab2431";
var successColor = "#28a745";

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
            snackBar("Username not available!", dangerColor);
        } else {
            var myNewObj = {
                "id": id + 1,
                "username": username,
                "email": email,
                "password": password
            };

            objRet["account"].push(myNewObj);
            localStorage.setItem('KBP_accounts', JSON.stringify(objRet));
            $('#reg-username').val('');
            $('#reg-email').val('');
            $('#reg-password').val('');
            snackBar("Registration success!", successColor);
        }
    } 
});

/**login**/
document.querySelector('#submit').addEventListener('click', function() {
    var isValid = document.querySelector('#form').reportValidity();
    var username = $('#username').val();
    var password = $('#password').val();
    var counter = 0;
    var account_id = 0;
    var current_username = "";

    if (isValid){
        for (var key in objRet.account) {
            if (objRet.account[key].username == username && objRet.account[key].password == password){
                counter++;
                account_id = objRet.account[key].id;
                current_username = objRet.account[key].username;
                
            }
        }

        if (counter > 0){
            snackBar("Credential accepted", successColor);
            $('#username').val('');
            $('#password').val('');
            var spinner = document.getElementById("spinner");
            spinner.classList.add("show");
            localStorage.setItem('KBP_login', account_id);
            localStorage.setItem('KBP_username', current_username);
            setTimeout(
                function() {
                    window.location.href = 'account.html';
                }
            , 3000);
        } else {
            snackBar("Credential denied", dangerColor);
        }
    } 
});

function snackBar(errmsg, background_color) {
    $('#errmsg').text(errmsg);
    var x = document.getElementById("snackbar");
    $("#snackbar").css("background-color", background_color);
    x.className = "show";

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}