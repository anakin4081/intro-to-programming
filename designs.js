// Select color input
var Color = document.querySelector("#colorPicker");
var Canvas = []
var indx = 1

// Select size input

const InputWidth = document.querySelector('#inputWidth');
const InputHeight = document.querySelector('#inputHeight');
const SubmitButton = document.querySelector('#inputSubmit');
const HTMLCanvas = document.querySelector('#pixelCanvas')
// Your code goes here! grid starts at 0
// When size is submitted by the user, call makeGrid()


SubmitButton.addEventListener('click', function makeGrid(page) {
    HTMLCanvas.removeRow()
    page.preventDefault();
    console.log(InputWidth.value + "GH recieved  " + InputHeight.value + "GW recieved");
    for (var r = 0; r < InputWidth.value; r++) {
        console.log("stage 1");
        var row = HTMLCanvas.insertRow(r);
        console.log(HTMLCanvas);
        for (var c = 0; c < InputHeight.value; c++) {
            console.log("stage 2");
            var column = row.insertCell(c);
            column.addEventListener('click', function(page) { //<---- this is supposed to add an event listener to each cell so when clicked responds to color
                page.preventDefault(); //<-- but the purpose of preventDefault fails and does not prevent the event listner 
            }
        }
    }
    console.log(Canvas);
});


const container = document.createElement('span');
container.textContent = Canvas;

