let arr = [1,2,4,5,7]
arr[0] = 5666
// console.log(arr, typeof arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(" and "))
// console.log()


// Delete

let nu = [1,2,3,4,5,6,7,8,9]
delete nu[0]
console.log(nu)
console.log(nu.length)


// concat method
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]

let concated = a1.concat (a2,a3) 
console.log(concated)


// sort method

let c = [7,99,8,1,12,9,2]
c.sort()
console.log(c)

// sort compare

let compare = (a,b) => {
    return a - b
}
let a = [7,99,8,1,12,9,2]
a.sort(compare)
// a.reverse()
console.log(a)

//



// splice 

let num = [1,2,3,4,5,6,7]
let deletedvalue = num.splice(2,3,55,66,77,88)
console.log(deletedvalue)
console.log(num)

// slice
let sl = [1,2,3,4,5,6]
let slic = sl.slice(2)
console.log(slic)



 