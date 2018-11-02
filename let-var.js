var a=1;
function foo(){
    var a=2;
    console.log(a);
}
foo()
console.log(a);

// out put 
// 2
// 1

let b=1;

function doo(){console.log(b)}
doo()

// 1



function eoo(){let c=1;}
// console.log(c)
eoo()

// error : c is not defined

var d=5;

function roo(){
    if(0){
        var d=0;
    }
    console.log(d);
}
roo()

// undefined


var e=5;

function zoo(){
    if(0){
        let e=0;
    }
    console.log(e);
}
zoo()

// 5
console.log(f);

var f;

// undefned
console.log(g);

let g;

// ReferenceError: g is not defined

