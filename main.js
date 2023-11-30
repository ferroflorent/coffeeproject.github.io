//const button = document.getElementById('colorButton');
//const button2 = document.getElementById('colorButton2');
const buttons = [document.getElementById('colorButton'), document.getElementById('colorButton2')];
const coffeedat = fetch('./dat.json');
//let currentStatuses = coffeedat.statuses;
//currentStatuses = [-1, -1];
let numButtons = 2;

const colors = ['green', 'yellow', 'orange', 'red'];
const texts = ["Working :D", "Busy :)", "Maintenance :/", "Not today :'("];

// Use fetch to get the data
let currentStatuses;
let statusesString;
fetch('./dat.json')
    .then(response => response.json())
    .then(data => {
        currentStatuses = data.statuses;
        statusesString = JSON.stringify(currentStatuses);
        // Your logic using currentStatuses goes here

        // For example, log the data to the console
        console.log(currentStatuses);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

buttons[0].textContent = statusesString;

for (let i = 0; i < numButtons; i++) {
    // Initialisation

    buttons[i].addEventListener('click', () => {
        currentStatuses[i] = (currentStatuses[i]+1) % 4 ;
        buttons[i].style.backgroundColor = colors[currentStatuses[i]];
        buttons[i].textContent = texts[currentStatuses[i]];
    });
}

/*
buttons[0].addEventListener('click', () => {
    currentStatuses[0] = (currentStatuses[0]+1) % 4 ;
    buttons[0].style.backgroundColor = colors[currentStatuses[0]];
    buttons[0].textContent = texts[currentStatuses[0]];
});

buttons[1].addEventListener('click', () => {
    currentStatuses[1] = (currentStatuses[1]+1) % 4 ;
    buttons[1].style.backgroundColor = colors[currentStatuses[1]];
    buttons[1].textContent = texts[currentStatuses[1]];
});*/

function upload(){

};

function charge(){

};