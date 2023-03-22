//declare variables
let display = document.getElementsByName("display")[0];

//function to append value to the display screen
function appendValue(val){
    display.value += val
}
function appendValue(val){
    display.value += val
}
//function to clear the display field
function clearDisplay(){
    display.value = ""
}
// function to delete  the last value in the display field
function deleteValue(){
    display.value = display.value.toString().slice( 0,-1)
}
//function  to evaluate the expression
function calculate(){
    display.value = eval(display.value)
}