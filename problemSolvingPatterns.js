//Frequency Counter
//Given 2 strings determine if one is the anagram of the other 
//It is assumed the strings contain only lowercase alphabets

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
  
//   validAnagram("istruethat", "thattrueis");
//   validAnagram("mesayswho", "homesayswe");