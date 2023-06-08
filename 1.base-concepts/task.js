"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  if (discriminant === 0){
    let x = -b/(2*a);
    arr.push(x);
  } else if (discriminant > 0){
    let x = (-b + Math.sqrt(discriminant) )/(2*a);
    let y = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(x, y);
  }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let bodyAmount = amount - contribution;
  let monthlyPayment = bodyAmount * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}