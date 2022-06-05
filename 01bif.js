//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya
// method bawaana dalam js 
/* 
1. join()
Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. 
example :
*/
//array string
const task = ["Banana", "Orange", "Apple", "Mango"]
const task2 = ["andi", "budi", "tiara", "risca"]
/*
concat()
*/
const rConcat = task.concat(task2);
console.log(rConcat);
/*
toString()
*/
const rString = task.toString ()
console.log(rString)
/*
forEach()
*/
task.forEach((huruf) => {
  console.log(huruf)
})
/*
reverse()
*/
const rR = task.reverse()
console.log(rR)

/*
join()
*/
var rJoin = task.join(" + ");
console.log(rJoin)
/*
splice()
*/
const rSplice = task.splice (1,3)
console.log(rSplice)
/*
shift()
*/
const rShift = task.shift ()
console.log(rShift)

// array number

const task3 = [5,8,12,130,44];
/*
find()
*/
const rFind = task3.find(element => element > 9);
console.log(rFind)
/*
map()
*/
const rMap = task3.map(x => x * 2);
console.log(rMap)

