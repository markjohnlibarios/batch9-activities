const student = [
    {
        firstname: 'Jose',
        lastname: 'Rizal'
    },
    {
        firstname: 'Manny',
        lastname: 'Pacquiao'
    },
    {
        firstname: 'Robert',
        lastname: 'Rodriguez'
    },
    {
        firstname: 'Elon',
        lastname: 'Musk'
    },
    {
        firstname: 'Mark',
        lastname: 'Zuckerberg'
    },
];
function sendText(firstname, lastname ) {
    //Write your code here.
    console.log("Hi, " + firstname + ' ' + lastname + ' our class for today has been cancelled. Have a safe day');
}
//sendText()

for (let i = 0; i < student.length; i++){
    sendText(student[i].firstname, student[i].lastname);
}
/*sendText('Jose', 'Rizal')
sendText('Manny', 'Pacquiao')
sendText('Robert', 'Rodriguez')
sendText('Elon', 'Musk')
sendText('Mark', 'Zuckerberg')*/