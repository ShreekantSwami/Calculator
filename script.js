var str = ''
var out = document.getElementById("result")
function getNumber(value) {
    let element = document.getElementById(value)
    str += element.innerText;
    console.log(str)
    out.value = str;
}
function evals() {
    if (str.length > 0) {
        out.value = eval(str);
    }
}
function clears() {
    str = '';
    out.value = '';
    console.log(str)
}

