// let rand = Math.random()
// let first, second, third;
// // 0.33 0.66 1

// // lets genterated the first word
// if (rand < 0.33) {
//       first = "Crazy"
// }
// else if(rand < 0.66 && rand >= 0.33) {
//     first = "Amazing"
// }
// else {
//     first = "Fire"

// }

// // lets generate the second word
// rand = Math.random()
// if (rand < 0.33) {
//       second = "Engine"
// }
// else if(rand < 0.66 && rand >= 0.33) {
//     second = "Food"
// }
// else {
//     second = "Garments"

// }

// // Lets generated the third word
// rand = Math.random()
// if (rand < 0.33) {
//     third = "Bros"
// }
// else if(rand < 0.66 && rand >= 0.33) {
//   third = "Limited"
// }
// else {
//   third = "Hub"

// }

// console.log(`${first} ${second} ${third}`)

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"

    
} 
let obj2 = {
    1: "Engine",
    2: "Food",
    3: "Garment"


} 
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"


} 

let num1 =Math.floor( Math.random()* 3) + 1;
let num2 =Math.floor( Math.random()* 3) + 1;
let num3 =Math.floor( Math.random()* 3) + 1;


console.log(`${obj1[num1]} ${obj2[num2]} ${obj3[num3]}`)
