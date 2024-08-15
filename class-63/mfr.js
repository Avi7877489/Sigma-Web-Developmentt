let arr = [ 1,13,5,7,11] 
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index]; 
//     newArr.push(element**2)      
    
// }
let  newArr = arr.map( (e,index, array) =>{
    return e ** 2
})
console.log(newArr)



// Filter

// const greaterThanSeven = (e) =>{
//     if(e>7) {
//         return true
//     } 
//     return false
// }
// console.log(arr.filter(greaterThanSeven))
console.log(arr.filter((e) =>{
    if(e > 7){
        return true
    }
    return false
}))
// filter  sort process
let arr3 = arr.filter((e)=>{
    return e > 2
})
console.log(arr3)

let af = arr.filter((e)=>{
    return e > 2

})
console.log(af)


// Reduce
let arr2 = [1,2,3,4,5,6]
const red = (a, b) => {
    return a + b
}
console.log(arr2.reduce(red))

let arr4 = [1,2,3,4,5,6]
const r = (t,r) =>{
    return t + r
}
console.log(arr4.reduce(r))

// reduce

let a2 = arr2.reduce((a1,a2) =>{
    return a1 + a2
})
console.log(a2)

let av = arr2.reduce((f,g)=>{
    return f + g

})
console.log(av)

let avh = arr4.reduce((a,b) =>{
    return a+b;
})
console.log(avh)


// Array From
let bb = "Avijit"
console.log(Array.from(bb))