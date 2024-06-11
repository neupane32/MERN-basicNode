//array

const myArr = [0,1,2,3,4,5]

//javascript array are resizable and can contain a mix of different datatypes,
/* javascript arrays-copy-operations creates Shallow Copies 
i.e. is a copy whose properties share the same reference point. */

const myHeros = ["Rajesh Hamal", "naagraj"]

const Arr2 = new Array(1,2,3,4,5)

console.log(Arr2[1])


//Array methods

myArr.push(6)
myArr.push(7)   //push: Add the value

myArr.pop()   //pop: remove the last elements of the array.

myArr.unshift(9) //unshift: add the value 9 in the first index
myArr.shift() //remove the first index value

console.log(myArr.includes(9));  //include le xa ki xaina vanera check garxa
console.log(myArr.indexOf(9));   //indexOf le kati index ma xa vanera check garxa


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)  //return a copy of a section of an array.

console.log(myn1);

const myn2 = myArr.splice(1,3); //REMOVE THE VALUE of 1-3 
console.log("B", myArr);
 