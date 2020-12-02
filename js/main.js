function insert(num) {
    document.form.textview.value = document.form.textview.value+num
}
function clean() {
    document.form.textview.value = "";
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp)
    }
}



const clacs = {
    '+': function(a, b) {return a + b},
    '-': function(a, b) {return a - b},
    '/': function(a, b) {return a / b},
    '*': function(a, b) {return a * b}
}

// const signs = ['+', '-', '*', '/'];

// for (let i = 0; i < signs.length; i += 1) {
//    if (i = i + 1) {}
// }

// const acceptableSings = ['+', '-', '*', '/']