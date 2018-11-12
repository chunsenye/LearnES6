function foo(a) {
    return a + 1
}
let bb = foo(22)
console.log(bb)

let bar = a => a + 1
let cc = bar(33)
console.log(cc)

// 两个数相加的的箭头函数

let sum = (n1, n2) => n1 + n2
console.log(sum(8, 9))

//  方法名 = (两个参数及以上) => {return}  有大括号一定要return

// 方法名 = 一个参数 => 返回结果可以是表达式

// 方法的嵌套

function aaa(num1) {
    return function bbb(num2) {
        return function ccc(num3) {
            return num1 + num2 + num3
        }
    }
}
let w1 = aaa(3)(2)(1)
console.log(w1)
// 改成箭头函数
let ddd = num1 => num2 => num3 => num1 + num2 + num3
let w2 =ddd(4)(5)(6)
console.log(w2)