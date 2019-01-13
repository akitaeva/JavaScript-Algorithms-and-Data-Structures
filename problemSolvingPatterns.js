//FREQUENCY COUNTER
//Given 2 strings determine if one is the anagram of the other 
//It is assumed the strings contain only lowercase alphabets


//My original solution
const validAnagram = (str1, str2) => {
    //checking for the edge cases - unequal length of input
    if (str1.length !== str2.length) {
      return false;
    } else if (str1.length === 0) {  //empty strings
      return true;
    }
    let charCounter1 = {}
    let charCounter2 = {}
    const charArr1 = str1.split("");
    const charArr2 = str2.split("");
    for (let char of charArr1) {
      charCounter1[char] = (charCounter1[char] || 0) + 1;
    }
    for (let char of charArr2) {
      charCounter2[char] = (charCounter2[char] || 0) + 1;
    }
    for (let key in charCounter1) {
      if (!(key in charCounter2) || charCounter2[key] !== charCounter1[key]) {
        return false;
      }
    }  
   
    return true;
}

//The refactored solution
const validAnagram = (str1, str2) => {
  //checking for the edge cases - unequal length of input
  if (str1.length !== str2.length) {
    return false;
  } else if (str1.length === 0) {  //empty strings
    return true;
  }
  //create an empty object to contain key-value pairs of the 1st string's letters count 
  let charCounter = {}
  //count how many times each letter appears in the 1st string
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i]
    //if letter key exists increment it's value count, otherwise set it to 1
    charCounter[char] ? charCounter[char] += 1 : charCounter[char] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    //cannot find the letter or its value count is zero then it's not an anagram
    if (!charCounter[char]) {
      return false;
    } else {
      charCounter[char] -= 1;
    }
  }  
 
  return true;
}
  
//   validAnagram("istruethat", "thattrueis");
//   validAnagram("mesayswho", "homesayswe");

//==============================================================
//Given 2 positive integers, find out if the two numbers have the same frequency of digits
//with the complexity Time: O(N)

function sameFrequency(num1, num2){
  //turn numbers into arrays of digits
  const digArr1 = num1.toString().split("").map(Number);
  const digArr2 = num2.toString().split("").map(Number);
  if (digArr1.length !== digArr2.length) {
      return false;
    }
  let digitCounter = {}  
  for (let i = 0; i < digArr1.length; i++) {
    let dgt =  digArr1[i];
     digitCounter[dgt] ? digitCounter[dgt] += 1 : digitCounter[dgt] = 1;
  }   
  console.log(digArr1, digArr2, "=====", digitCounter);
  for (let i = 0; i < digArr2.length; i++) {
    let dgt =  digArr2[i];
    if (!digitCounter[dgt]) {
      return false;
    } else {
      digitCounter[dgt] -= 1;
    }

  }
  return true;
}


//sameFrequency(3446572, 5325746);



//==============================================================
// 
//  MULTIPLE POINTERS

const countUniqueValues = (arr) => {
  if (arr.length===0) { return 0}    
  let index = 0;     //tracking the current index position
  let pointer = 1;   //tracking the last unique element in the array
  while (pointer < arr.length) {
    if (arr[index] === arr[pointer]) {
       pointer +=1;
       console.log("pointer", pointer);
    } else {
       index++;
       arr[index] = arr[pointer];
       console.log("index, arr", index, arr);
    }
  }
   return index+1;
  }

 
//The refactored solution

const countUniqueValues = (arr) => {
  if (arr.length===0) { return 0}    
  let index = 0;     //tracking the current index position
for (let i=1; i<arr.length; i++) {
  if (arr[index] !== arr[i]) {
    index++;
    arr[index] = arr[i]
  }
}

  return index+1;
}

//countUniqueValues([1,1,3,4,5,6,6,7,8,9,9])


