/**
 * If we list all the natural numbers below 10 
 * that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.

  Finish the solution so that it returns 
  the sum of all the multiples of 3 or 5 
  below the number passed in. Additionally, 
  if the number is negative, return 0 (for languages that 
  do have them).
 */

export class Challenge {
  static solution(number: number) {
    if (number > 0) {

      let naturalNumbers: number[] = [];

      for (let i = number - 1; 
        naturalNumbers.length < number && i > 0; 
        i--) { naturalNumbers.push(i) };

      const multipleSum = naturalNumbers
        .reduce((acc, currentNumber) => {
          if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
            return acc + currentNumber;
          };

          return acc;
        }, 0)

      console.log(multipleSum);

      return multipleSum;
    }

    return 0;
  }
}

Challenge.solution(10);


