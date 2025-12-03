const display = document.querySelector("#display");
const  buttons = document.querySelector("button");

function appendtodisplay(input){
    display.value += input; //+= takes existing value and adds another one
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}