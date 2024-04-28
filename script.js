function displaymeDalDo(val){

    if(val === '='){
        const display = document.getElementById("display");
        const result = eval(display.value)
        display.value = result;
        return;
    }
    
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}