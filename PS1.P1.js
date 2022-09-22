/*a function that takes a string as its input and returns a new string that contains all the
letters in the original string, but in reverse alphabetical order*/

const reverseStrings = (str) => {
  let newStr = str.split('').sort().reverse().join('');
  let noDigits = newStr.replace(/[0-9]/g, '').replace(/[^a-zA-Z ]/g, "");
  return noDigits;
}

//sample tests
console.log(reverseStrings('supercalifragilisticexpialidocious'));

console.log(reverseStrings( 'exioi584997#@@()^&!$#^%&*(292998'))