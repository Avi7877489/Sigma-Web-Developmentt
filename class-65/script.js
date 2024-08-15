
// let a = 2

// function factorial(number) {
//     let arr = Array.from(Array(number + 1 ).keys())
//     let c = arr.slice(1,).reduce((a,b)=> a * b)
//     return c
// } 
// console.log(factorial(a))


// let a = Array.from(num)
// let newArr  = []
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     newArr.push(element ** 2)
    
// }

// let av = a.reduce((a,b)=>{
//     return a * b
// })
// console.log(av)

let input = prompt("Enter numbers of Element:")
let a = []

for (let i = 0; i <= input; i++) {
    a[i] = prompt("Enter Num:")
    
}

// let a = [1,2,3,4,5,6]

let av = a.reduce((c,b) =>{
    return c*b
})
console.log(av)