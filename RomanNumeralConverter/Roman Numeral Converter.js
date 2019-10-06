//Convert Roman Numerals up to 3999
function convertToRoman(num) {
  var romanNumArr = [
  // 10^i 10^i*5
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      normNumbers = num.toString()
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";

  // Ones place loop 
  for (var i=0; i<normNumbers.length; i++) {
    // RN that ignores 5-multiples and shortening rules
    numeral = romanNumArr[i][0].repeat(normNumbers[i]) + numeral;
    // RN 5-multiple version
    if (romanNumArr[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romanNumArr[i][0].repeat(5), romanNumArr[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(romanNumArr[i][1] + romanNumArr[i][0].repeat(4), romanNumArr[i][0] + romanNumArr[i+1][0])
        // Shorten occurrences of 4 * 10^i
        .replace(romanNumArr[i][0].repeat(4), romanNumArr[i][0] + romanNumArr[i][1]);
    }
  }

  return numeral;
}