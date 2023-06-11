function getArrayParams(...arr) {
  if(arr.length === 0){
    return 0;
  } else {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = arr.reduce((a, b) => a + b) / arr.length;
    avg = Number(avg.toFixed(2))
    return {min: min, max: max, avg: avg};
  }
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  } else {
    return arr.reduce((a, b) => a + b);
  }
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
    return 0;
  } else {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    maxWorkerResult = result > maxWorkerResult ? result : maxWorkerResult;
  }
  return maxWorkerResult;
}

