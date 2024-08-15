// JavaScript Conditional if, else if, else ledder

console.log("Hello I am conditional tutorial");

let age = 19;
// let grace = 2;

// console.log(age  + grace);
// console.log(age  - grace);
// console.log(age  * grace);
// console.log(age  / grace);
// console.log(age  ** grace);
// console.log(age  % grace);

// if ((age+grace)>18)
// if (age == 18 ) {
// if (age != 18 ) {
if (age >= 18) {
    console.log("you can drive");

}

else if (age == 0) {
    console.log("Are you kidding?");
}
else if (age == 1) {
    console.log("Are you again kidding?");
}
else {
    console.log("you cannot drive");
}

/*translates to:
if (a>b) {
    let c = a-b;
}
else {
    let c = b - a;
}
*/

let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c)