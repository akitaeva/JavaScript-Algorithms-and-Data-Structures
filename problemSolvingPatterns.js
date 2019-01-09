//Frequency Counter
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
    //cannot find the letter or its value count is zero then it;s not an anagram
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