function one(){
    document.getElementById('value').value += 1;
}
function two(){
    document.getElementById('value').value += 2;
}
function three(){
    document.getElementById('value').value += 3;
}
function four(){
    document.getElementById('value').value += 4;
}
function five(){
    document.getElementById('value').value += 5;
}
function six(){
    document.getElementById('value').value += 6;
}
function seven(){
    document.getElementById('value').value += 7;
}
function eight(){
    document.getElementById('value').value += 8;
}
function nine(){
    document.getElementById('value').value += 9;
}
//////////////////////////////////////////////////////////
function plus(){
    var oneValue;
    oneValue = document.getElementById('value').value;
    document.getElementById('value').value = ' ';
}
function equally(oneValue){
    var twoValue, result = 5;
    twoValue = document.getElementById('value').value;
    result = +twoValue + +oneValue;
    document.getElementById('value').value += result;
}
