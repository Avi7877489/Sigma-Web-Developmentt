// console.log("avijit")
// let boxes = document.getElementsByClassName("box")
// console.dir(boxes)
// boxes[2].style.backgroundColor = "red"
// boxes[2].style.color = "white"

// document.getElementById("red-box").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor="red"

// querySelectorAll


document.querySelectorAll(".box").forEach(element => {
   element.style.backgroundColor = "green"
});



// let boxx = document.querySelectorAll(".box")
// let i = 1
// for (const element of boxx) {
//     element.style.backgroundColor = "red"

//     i++
// }

// Tag Name

let tagg = document.getElementsByTagName("div")
console.log(tagg)
// Matches
console.log(tagg[3].matches("#red-box"))
console.log(tagg[4].matches("#red-box"))

//colsest
console.log(tagg[3].closest("#red-box"))
console.log(tagg[4].closest("#red-box"))

// contains
console.log(tagg[3].contains(tagg[3]))
console.log(tagg[3].contains(tagg[4]))


