// Написать функцию которая принимает в качестве аргумента массив чисел и возвращает новый массив с количеством повторений первоначального массива {число: кол во повторений}

console.log('Start Third Function')

function countEachItem(arr) {
  const obj = {}
  arr.forEach( item => {
    obj[item] = (obj[item] || 0) + 1
  })

  return Object.keys(obj).reduce((acc, i) => {
    acc.push({[i]: obj[i]})
    return acc
  },[])
}

console.log(countEachItem([1, 3, 2, 2, 4, 3, 5, 6, 5]))

console.log('End Third Function')