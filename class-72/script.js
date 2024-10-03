// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children

// // console.log(boxes)
// function getrandomcolor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);

//     return `rgb(${val1}, ${val2}, ${val3})`

// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getrandomcolor()
//     e.style.color = getrandomcolor()
// })


let avv = document.getElementsByClassName("box")

function ffgggg(){
    let vale1 = Math.ceil(0 + Math.random() * 255)
    let vale2 = Math.ceil(0 + Math.random() * 255)
    let vale3 = Math.ceil(0 + Math.random() * 255)

    return `rgb(${vale1} , ${vale2}, ${vale3})`
}

Array.from(avv).forEach(e => {
    e.style.backgroundColor = ffgggg()

    e.style.color = ffgggg()
});
