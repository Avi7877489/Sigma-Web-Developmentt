// document.designMode = "on"  // edite all the websit

let avv = document.querySelector(".box").dataset
console.log(avv)

let aff = document.querySelector(".container").children[0].dataset;
console.log(aff)

//  created element

let div = document.createElement("div")
div.setAttribute("class", "creted")

div.innerHTML= "<i>hfhjfhg</i>"
document.querySelector(".container").prepend(div)  
// document.querySelector(".container").append(div)  
// document.querySelector(".container").before(div)  
// document.querySelector(".container").after(div)  

// document.querySelector(".container").replaceWith(div)  // replace all the data of the element 


// ADJSN

let fbb = document.querySelector(".container")
// fbb.insertAdjacentHTML("beforebegin", "<b> Hi i am avijit ghosh</b>")
// fbb.insertAdjacentHTML("afterbegin", "<b> Hi i am avijit ghosh</b>")
// fbb.insertAdjacentHTML("beforeend", "<b> Hi i am avijit ghosh beforeend</b>")
fbb.insertAdjacentHTML("afterend", "<b> Hi i am avijit ghosh AfterEnd</b>")