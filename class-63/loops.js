let a = [1, 93, 5, 6, 88]

// for(let i = 0; i < a.length; i++){
//     console.log(a(i))
// }


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

a.forEach((value, index,arr) =>{
    console.log(value * value, index, arr)
})


let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}
for(const key in a) {
    if(Object.hasOwnProperty.call(a,key)) {
        const element = a[key] 
        console.log(key,element)
    }
}

for (let i in a){
    console.log(i)
}

for (const iterator of a) {
    console.log(iterator)
}

for(let i of a){
    console.log(i)
}
