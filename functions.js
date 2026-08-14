//1.Reverse Number
/*Write a JavaScript function that reverses a number.

Example x = 32243;

Expected Output : 34223*/

function reverseNum(num){
  let reverse = 0;
  while (num > 0){
    let temp = num%10
    reverse = reverse*10+temp
    num = Math.floor(num/10)
  }
  return reverse
}
// console.log(reverseNum(32243))


/*2.Check Palindrome

Write a JavaScript function that checks whether a passed string is a palindrome or not?

A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */
const checkPalindrome = function(str){
  reverse = ""
  for(let char of str){
    reverse = char+reverse
  }
  if(str === reverse){
    return true
  }else{
    return false
  }
}
// console.log(checkPalindrome("assa"))

/*3. String Combinations
Write a JavaScript function that generates all combinations of a string. Technical Interview Prep

Example string : 'dog'

Expected Output : d,do,dog,o,og,g*/
function substrings(str){
  let size = str.length
  for(let i = 0; i<size; i++){
    for(let j = i; j<size; j++){
      console.log(str.slice(i,j+1))
    }
  }
}
// substrings("dog")

/*4. Sort String Alphabetically 
Write a JavaScript function that returns a string that has letters in alphabetical order.

Example string : 'webmaster'

Expected Output : 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.*/
function sortString(str){
  let sorted = [...str].sort().join('')
  console.log(sorted)
}
// sortString("webmaster")

/*5. Capitalize First Letter of Each Word 
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.Problem Solving Guide

Example string : 'the quick brown fox'

Expected Output : 'The Quick Brown Fox '*/
function capFirstLett(str){
  arr = str.split(" ")
  return arr.map((char=>char.charAt(0).toUpperCase()+char.slice(1))).join(" ")
}
// console.log(capFirstLett('the quick brown fox'))


/*6. Find Longest Word
Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

Example string : 'Web Development Tutorial'

Expected Output : 'Development' */
function findLongestWord(str){
   let longest = 0;
   let largStr = ""
   arr = str.split(" ");
   for(let ele of arr){
    if(ele.length > longest){
      longest = ele.length
      largStr = ele
    }
   }
   return largStr
}
// console.log(findLongestWord('Web Development Tutorial'))

/*7. Count Vowels
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Example string : 'The quick brown fox'Scripting Languages

Expected Output : 5 */
function countVowels(str){
  let vowels = {a:1,e:1,i:1,o:1,u:1}
  count = 0
  for(let char of str){
    if(vowels[char]){
      count += 1
    }
  }
  return count
}
// console.log(countVowels('mere rang mai rangne wali pari ho ya ho pariyo ki rani'))


/*8. Check Prime Using Recursion

Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */
function checkPrime(num, val){
  if(val >= Math.floor(num/2)){
    if(num%val==0){
      return false
    }else{
      return true
    }
  }
  if(num%val == 0){
    return false
  }else{
    return checkPrime(num, val+1)
  }
}
// console.log(checkPrime(24,2))


/*9. Get Type of Argument

Write a JavaScript function that accepts an argument and returns the type.

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */
function typeOfArg(arg){
  return typeof(arg)
}
// console.log(typeOfArg(23))


/*10. Generate Identity Matrix
Write a JavaScript function which returns the n rows by n columns identity matrix. */
function genIdentMatr(n){
  for(let i = 1; i<=n; i++){
    for(let j = 1; j <= n; j++){
      if(i==j){
        process.stdout.write('1 ')
      }
      else{
        process.stdout.write("0 ")
      }
    }
    console.log()
  }
}
// genIdentMatr(3)

/*11. Find Second Lowest and Greatest
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

function lowAndGrt(arr){
 let nums = arr;
 let larg = -Infinity;
 let secLarg = larg;
 let low = Infinity;
 let secLow = Infinity;
 for(let ele of arr){
  if(ele > larg){
    secLarg = larg
    larg = ele
  }
  if(ele > secLarg && ele < larg){
    secLarg = ele
  }
  if(ele < low){
    secLow = low
    low = ele
  }
  if(ele < secLow && ele > low){
     secLow = ele
  }
 }
 return `second largest ele is ${secLarg} and sec low is ${secLow}`
}
// console.log(lowAndGrt([3,1,5,7,9,8]))

/*12. Check Perfect Number
Write a JavaScript function that checks whether a number is perfect.

According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function perfectNum(n){
  let divs = [];
  sum = 0;
  for(let i = 1; i <= Math.floor(n/2); i++){
    if(n%i==0){
      divs.push(i)
    }
  }
  for(let ele of divs){
    sum = sum+ele
  };
  if(sum == n && (sum+n)/2 == n){
    return `${n} is a perfect number😊`;
  }else{
    return "not a perfect number🥲";
  }
}
// console.log(perfectNum(28));

/*14. Convert Amount to Coins
Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.

Output : 25, 10, 10, 1 */
function amountToCoins(amount, arr){
  let totalAm = amount;
  let size = arr.length
  const result = [];
  let index = 0
  while(totalAm>=0 && index<size){
    if(totalAm>=arr[index]){
      totalAm = totalAm-arr[index]
      result.push(arr[index])
    }else{
      index += 1
    }
  }
  console.log(result)
}
// amountToCoins(46, [25, 10, 5, 2, 1])

/*16. Extract Unique Characters
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg" */

function uniqChar(wrd){
  let word = wrd;
  let res = "";
  const dictMap = {};
  for(let ele of word){
    if(ele in dictMap){
      continue;
    }else{
      res += ele;
      dictMap[ele] = 1
    }
  }
  console.log(res)
}
// uniqChar("thequickbrownfoxjumpsoverthelazydog");

/*18. Binary Search in Array

Write a function for searching JavaScript arrays with binary searches.

Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value. */
function binarySearch(arr, target){
  low = 0
  high = arr.length-1
  while (low <= high){
    mid = Math.floor((low+high)/2)
    if(arr[mid]==target){
      return `target ${target} is found on index ${mid}`;
    };
    if(arr[mid] < target){
       low = mid+1;
    }
    if(arr[mid]>target){
      high = mid-1
    }
  }
  return "target not found"
}
// console.log(binarySearch([1,2,54,88,99],88)) //target 88 is found on index 3

/*19. Find Elements Larger Than Number
Write a JavaScript function that returns array elements larger than a number. */

function largerEle(arr,num){
  const result = [];
  for(let ele of arr){
    if(ele > num){
      result.push(ele);
    }
    else{
      continue;
    }
  }
  return result
}
// console.log(largerEle([1,32,43,14,65,12,10], 20))

/*20. Generate Random String ID
Write a JavaScript function that generates a string ID (specified length) of random characters. Programming

Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */
function makeId(text){
  strId = "";
  char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i of text){
    strId += char_list.charAt(Math.floor(Math.random()*char_list.length));
  }
  return strId
}
// console.log(makeId("programming"))

/*21. Fixed-Length Subsets
Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.

Sample array : [1, 2, 3] and subset length is 2

Expected output : [[1,2],[1,3],[2,3]] */
function fixed_len_subsets(arr, size){
   const n = arr.length ;
   const result = [];
   for(let i = 0;i<n-1; i++){
    let subset = [arr[i]]
    for(let j = i+1; j < n; j++){
      if(subset.length < size){
        subset.push(arr[j])
      }
      if(subset.length == size){
        result.push(subset);
        subset = [arr[i]]
      }
    }
   }
   return result;
}
// console.log(fixed_len_subsets([1,2,3,4,5],2))


/*22. Count Letter in String
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2 */
function countLetter(str, letter){
   let count = 0;
   for(let i of str){
    if(i==letter){
      count+= 1
    }
    else{
      continue
    }
   }
   return count;
}
// console.log(countLetter('w3resource.com','o')) //2

