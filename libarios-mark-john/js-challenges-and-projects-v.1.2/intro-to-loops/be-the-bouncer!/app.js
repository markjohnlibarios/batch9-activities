const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

var gender = '';
var messageNotAllowed =  "you are not allowed to enter because you are underage.";
var messageAllowed =  "you are allowed.";

for (let i = 0; i < nightClubRegister.length; i++){
    if (nightClubRegister[i].gender == "male"){
        gender = 'Mr. ';
    } else {
        gender = 'Ms. ';
    }
    if (nightClubRegister[i].age < 18) {
        console.log("I'm sorry " + gender + nightClubRegister[i].name + " " + nightClubRegister[i].lastname + ", " + messageNotAllowed);
    } else {
        console.log("Welcome, " + gender + nightClubRegister[i].name + " " + nightClubRegister[i].lastname + ", " + messageAllowed);
    }
}