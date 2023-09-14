// Необходимо реализовать функцию, которая принимает этот массив в качестве аргумента и возвращает новый массив, содержащий только уникальные элементы. Новый массив должен быть отсортирован по возрастанию.

console.log('Start Second Function')

function unique(arr) {
  return [...new Set(arr)].sort()
}


console.log(unique([1, 3, 2, 2, 4, 3, 5, 6, 5]))
console.log(unique([9, 9, 9, 9, 9]))
console.log(unique([1, 2, 3, 4, 5]))

console.log('End Second Function')