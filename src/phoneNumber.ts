function createPhoneNumber(numbers: number[]): string {

  return numbers.reduce((acc, current) => {
    return acc.replace('x', current.toString()) 
  }, "(xxx) xxx-xxxx")
} 

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))