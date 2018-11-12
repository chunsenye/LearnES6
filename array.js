var [a,b,c]=[1,2,3]
console.log(a,b,c)
// 1 2 3
var [d,[e,f]]=[4,[5,6]]
// var [d,[e,f]]=[4,5,6] [4,5,6] is not iterable
console.log(d,e,f)
// 4,5,6
let [,,g]=[7,8,9]
console.log(g)
// 9
let [x,y,...z] =[9,8,7,6,5,4]
console.log(x,y,z)
// 9 8 [ 7, 6, 5, 4 ]

// Set结构

let [aa,bb,cc]=new Set([1,2,3])
console.log(aa,bb,cc)

function* fibs(){
    let a = 1
    let b = 2
    while(true){
        yield a;
        [a,b]=[b,a+b]
    }
}
fibs()