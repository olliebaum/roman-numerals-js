function toRoman(num) {
  var numArray = num.toString().split('');
  if (num >= 4000 || num < 0) {
    throw "Please enter a number between 1-399!";
  }
  var units = {
    0: "", 1: "I", 2: "II", 3: "III",
    4: "IV", 5: "V", 6: "VI", 7: "VII",
    8: "VIII", 9: "IX"
  };

  var tens = {
    0: "", 1: "X", 2: "XX", 3: "XXX",
    4: "XL", 5: "L", 6: "LX", 7: "LXX",
    8: "LXXX", 9: "XC"
  };

  var hundreds = {
    0: "", 1: "C", 2: "CC", 3: "CCC",
    4: "CD", 5: "D", 6: "DC", 7: "DCC",
    8: "DCCC", 9: "CM"
  };

  var thousands = {
    0: "", 1: "M", 2: "MM", 3: "MMM"
  };

  var roman = "";

  function filter(numStr) {
    if (numStr == null) {
      return "0";
    }
    else {
      return numStr;
    }
  };

  roman += units[filter(numArray.pop())];
  roman = tens[filter(numArray.pop())] + roman;
  roman = hundreds[filter(numArray.pop())] + roman;
  roman = thousands[filter(numArray.pop())] + roman;

  return roman;
};

module.exports = toRoman;
