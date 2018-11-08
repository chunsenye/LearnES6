// test 1 ---------------------------
// let 只在块里面有用
{
    let a = 'haha' 
}
// console.log(a)
// a is not defined

// test 2 ---------------------------

var a = []
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i)
    }
}
a[6]()
// 输出结果为6
var b = []
for(var i=0;i<10;i++){
    b[i]=function(){
        console.log(i)
    }
}
b[6]()
// 输出结果为10

// test 3 ---------------------------
var tmp = 666

if(true){
    // console.log(tmp) //会报错
    let tmp
    tmp = 999
    console.log(tmp)
    // let tmp  //会报错 形成封闭 会优先认为是let定义的tmp 
}
console.log(tmp)

function bar1(x=y,y=2){
    return [x,y]
}
//console.log(bar1()) //死区 y 未定义
function bar2(x=2,y=x){
    return [x,y]
}
console.log(bar2()) // [2,2]
