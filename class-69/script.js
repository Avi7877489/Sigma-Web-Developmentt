let a = 6

function factorial(number){
   let arr =  Array.from(Array(number + 1).keys() )

   // console.log(arr)

   let c = arr.slice(1).reduce((a,b) => a * b
    // return a * b 
)
   return c
}


console.log(factorial(a))

function facfor(number){
    let fac = 1
    for (let index = 1; index <= number; index++) {
       fac = fac * index
       
        
    }
    return fac
}
console.log(facfor(a))

function facc (num){
   let arr = Array.from(Array(num + 1).keys())

   let g = arr.slice(1).reduce((a,b)=> a*b
)
 return g

}
console.log(facc(a))

let g = 5

function fagg (number){
   let arr = Array.from(Array(number + 1).keys())

   let n = arr.slice(1).reduce((a,b) =>a *b
)
return n
}
console.log(fagg(g))
