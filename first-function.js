// Написать функцию которая: учитывает массив несортированных чисел и определяет являются ли числа в массиве последовательными.

console.log('Start First Function')

// In case of you expect to not use ready functions such Math.min or Math.max I will create separate functions for calculation of them
function ifConsistent(arr) {
  // Min max calculation option 1
  const minVal = Math.min(...arr)
  const maxVal = Math.max(...arr)

  // Min max calculation option 2
  // const minVal = min(arr)
  // const maxVal = max(arr)

  let sum = 0
  for (let i = minVal; i <= maxVal; i++) {
    sum += i
  }

  const sumOfArr = arr.reduce((acc, i) => acc += i, 0)

  return sum === sumOfArr
}

console.log(ifConsistent([5, 2, 3, 1, 4]))
console.log(ifConsistent([5, 2, 3, 1, 4,8]))
console.log(ifConsistent([5, 2, 3, 1, 4, 6]))
console.log(ifConsistent([34, 23, 52, 12, 3]))
console.log(ifConsistent([7, 6, 5, 5, 3, 4]))

// upper written comment related functions
function min(arr) {
  return arr.reduce((acc, item) => {
    if (item < acc) {
      acc = item
    }
    return acc
  }, +Infinity)
}

function max(arr) {
  return arr.reduce((acc, item) => {
    if (item > acc) {
      acc = item
    }
    return acc
  }, -Infinity)
}

console.log('End First Function')
