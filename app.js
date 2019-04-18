$(document).ready(function() {
    $('#redBtn').on('click', whenIclickTheRedButton);
    $('#blueBtn').on('click', whenIclickTheBlueButton);
    $('#greenBtn').on('click', whenIclickTheGreenButton);
    $('#yellowBtn').on('click', whenIclickTheYellowButton);
});

let redCount = 0;

function whenIclickTheRedButton() {
    redCount++;
    $('#redCount').text('Red Count: ' + redCount);
    $('#container').append('<div class="box red"></div>');
}

let blueCount = 0;

function whenIclickTheBlueButton() {
    blueCount++;
    $('#blueCount').text('Blue Count: ' + blueCount);
    $('#container').append('<div class="box blue"></div>');
}

let greenCount = 0;

function whenIclickTheGreenButton() {
    greenCount++;
    $('#greenCount').text('Green Count: ' + greenCount);
    $('#container').append('<div class="box green"></div>');
}

let yellowCount= 0;

function whenIclickTheYellowButton() {
    yellowCount++;
    $('#yellowCount').text('Yellow Count: ' + yellowCount);
    $('#container').append('<div class="box yellow"></div>');
}

console.log('Im running outside the document ready!');


/*
function onReady() {
    console.log('Code to run when it loads!');
}

let someFunction = function() {
    console.log('Hey, Im a function!');
}
*/