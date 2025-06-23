let str="i am ash"

let revString= str.split(" ").reverse();
// console.log(revString)

let arr=[]
revString.forEach((element)=>{
    let s= element.split("").reverse().join("")
    // console.log(s)
    arr.push(s);
})

console.log(arr.join(" "))

let myVariable; // myVariable is undefined
console.log(myVariable);

let myValue = null; // myValue is explicitly set to null
console.log(typeof(myValue)); 

const emptyArray = new Array(100);
console.log(emptyArray.length); 

let emp=[]
emp.length=100;
console.log(emp.length); 










