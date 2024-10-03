let av = document.querySelector(".container").children

function randomcolor(){

    // let val1 = Math.ceil(0 + Math.random()* 255);
    // let val2 = Math.ceil(0 + Math.random()* 255);
    // let val3 = Math.ceil(0 + Math.random()* 255);

    let val1 =  Math.random()* (255 - 0 +1) + 0;
    let val2 =  Math.random()* (255 - 0 +1) + 0;
    let val3 =  Math.random()* (255 - 0 +1) + 0;

    return `rgb(${val1}, ${val2}, ${val3})`

    
}
Array.from(av).forEach(e => {

    e.style.backgroundColor = randomcolor()

})
// av.children[0].style.backgroundColor = "red"
// av.children[1].style.backgroundColor = "green"
// av.children[2].style.backgroundColor = "yellow"
// av.children[3].style.backgroundColor = "blue"
// av.children[4].style.backgroundColor = "pink"