const ftoc = function(fahrenheit) {

  let convertedTemp = (fahrenheit-32) * (5/9);

  if (convertedTemp % 1 === 0) {
    return convertedTemp;
  } else {
    return Number(convertedTemp.toFixed(1));
  }
  
};

const ctof = function(celsius) {

  let convertedTemp = celsius * (9/5) + 32;

  if (convertedTemp % 1 === 0) {
    return convertedTemp
  } else {
    return Number(convertedTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
