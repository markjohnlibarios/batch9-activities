const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyListSpan = document.querySelectorAll('.buy-list');

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    if (fridge.length != 0){
        var counterFridgeList = fridge.length - 1;
        buyList.push(fridge[counterFridgeList]);
        fridge.pop();
        display();
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    if (buyList.length != 0){
        var counterBuyList = buyList.length - 1;
        fridge.push(buyList[counterBuyList]);
        buyList.pop();
        display();
    }
}

downButton.addEventListener('click', moveDown)

function display(){
    buyListDisplay.innerHTML = buyList;
    fridgeListDisplay.innerHTML = fridge;
}

display();


// TODO: dynamic result
// function fillBuyList(){
//     counter = buyList.length - 1;

//     for(let i = 0; i < buyList.length; i++){
//         var spanElement = document.createElement("SPAN");
//         spanElement.setAttribute("id", i);
//         spanElement.setAttribute("class", 'buy-list');
//         spanElement.setAttribute("onclick", 'alertMe(this.id)');
//         if (counter != i){
//             spanElement.textContent  = buyList[i] + ', ';
//         } else {
//             spanElement.textContent  = buyList[i];
//         }
//         buyListDisplay.appendChild(spanElement); 
//     }

// }

// function alertMe(id){
//     alert(id);
// }

// //buyListSpan.addEventListener('click', alertMe);

// fillBuyList();