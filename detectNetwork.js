var detectNetwork = function(cardNumber) {
  var info = {
    "Diner\'s Club": {
      prefix: ['38', '39'],
      length: [14]
    },
    "American Express": {
      prefix: ['34', '37'],
      length: [15]
    },
    "Visa": {
      prefix: ['4'],
      length: [13, 16, 19]
    },
    "MasterCard": {
      prefix: ['51', '52', '53', '54', '55'],
      length: [16]
    },
    "Discover": {
      prefix: ['6011'],
      length: [16, 19]
    },
    "Maestro": {
      prefix: ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'],
      length: [16, 17, 18, 19]
    },
    "China Union Pay": {
      prefix: ['62', '88'],
      length: [16]
    }
  }
  for (var prop in info) {
    var cardInfo = info[prop];
    var prefix = cardInfo.prefix;
    var length = cardInfo.length;
    var prefixLength = prefix[0].length;
    var cardNumberPrefix = cardNumber.slice(0, prefixLength);
    var cardNumberLength = cardNumber.length;
    if (length.includes(cardNumberLength) && prefix.includes(cardNumberPrefix)) {
      return prop;
    }
  }
  return "Not available"
}

//Solving with Regx!
//   var creditCardRegex = {
//     "Diner\'s Club": /^3[89][0-9]{12}$/, 
//     "American Express": /^3[47][0-9]{13}$/,
//     "Mastercard": /^5[1-5][0-9]{14}$/,
//     "Visa": /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/,
//     "Discover": /^[6][0][1][1][0-9]{12}(?:[0-9]{3})?$/,
//     "Maestro": /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{12,15}$/,
//     "China Union Pay": /^(62|88)[0-9]{14}$/
//   }
  
//   for(var card in creditCardRegex) {
//     if(cardNumber.match(creditCardRegex[card])) {
//       return card;
//     }
//   }
//   return "None available. Please re-enter information and try again.";
// };