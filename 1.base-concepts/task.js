"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else {
    if (d === 0) {
      let x1 = -b / (2 * a);
      arr.push(x1);
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }
  // if (isNaN(percent)) {
  //   return false;
  // }
  // if (isNaN(contribution)) {
  //   return false;
  // }
  // if (isNaN(amount)) {
  //   return false;
  // }
  // if (isNaN(countMonths)) {
  //   return false;
  // }
  let percentByMonth = percent / 12 / 100;
  let creditBody = amount - contribution;
  let s = creditBody;
  let p = percentByMonth;
  let n = countMonths;
  let payment = s * (p + p / ((1 + p) ** n - 1)) * n;
  return Math.round(payment * Math.pow(10, 2)) / Math.pow(10, 2);
}