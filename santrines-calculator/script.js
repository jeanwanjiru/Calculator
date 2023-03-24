let display = document.getElementsByName("display")[0];
function appendValue(val){
    display.value += val
}
function clearDisplay(){
    display.value = ""
}
function deleteValue(){
    display.value = display.value.toString().slice(0,-1)

}
function calculate (){
    display.value = eval(display.value)
}