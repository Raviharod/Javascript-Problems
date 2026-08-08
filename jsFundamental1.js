//Javascript fundamnetal problems 1


//1.compare two objects 
let obj = {
  name:"maharaja pradyuman",
  age:59,
  city:"lucknow",
  car:"BMW",
  dob:"21-12-1993"
}
let source = {
  name:"maharaja pradyuman",
  age:59,
  city:"lucknow",
  car:"BMW",
  dob:"21-12-1993"
}

function compare(obj,source){
  return Object.keys(source).every(key=>obj.hasOwnProperty(key) && obj[key]===source[key])
}
// console.log(compare(obj,source))

//3.CSV String to 2D Array
function csv_to_array(data){
  arr1 = data.split("\n");
  arr2d = arr1.map(ele=>ele.split(","))
  console.log(arr2d)
}
// console.log(csv_to_array('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]

//4. 4. CSV to 2D Array of Objects
/*Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.*/


