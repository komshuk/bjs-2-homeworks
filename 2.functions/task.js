function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity; 
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if(arr[i] < min){
      min = arr[i]
    };
    if(arr[i] > max){
      max = arr[i]
    };
    avg = sum/(arr.length);
    };


  return { min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {
let summElements = arr.reduce(function(sum, elem){
  return sum + elem;
  }, 0);
return summElements;
}

function differenceMaxMinWorker(...arr) {
  let minmax = 0;
  if (arr.length == 0){
    minmax == 0;
  } else {
minmax = Math.max.apply(null, arr) - Math.min.apply(null, arr);}
return minmax;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;
  if (arr.length ==0){
    result ==0;
  } else {
  for (let i=0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
    } else {
        sumOddElement += arr[i];
    }
    result = sumEvenElement - sumOddElement
  }
}
return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  if (arr.length ==0){
    result ==0;
  } else {
  for (let i=0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        sumEvenElement += arr[i], countEvenElement++;
    }
    result = sumEvenElement / countEvenElement;
  }
}
return result;
}

// function makeWork (arrOfArr, ...func) {
//   let maxWorkerResult = -Infinity;
//   if (arrOfArr.length == 0) {
//     maxWorkerResult = 0;
//   } else {
//     for (let i = 0; i < arrOfArr.length; i++) {
//       const funcResult = func[i % func.length].apply(null, arrOfArr[i]);
//       if (funcResult > maxWorkerResult) {
//         maxWorkerResult = funcResult;
//       }
//     }
//   }
//   return maxWorkerResult;
// }

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
      const funcResult = func(...arrOfArr[i]);
      if (funcResult > maxWorkerResult) {
        maxWorkerResult = funcResult;
      }
    }
  return maxWorkerResult;
}