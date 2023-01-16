/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Personal Rule: No use Array.
*/

// export function reverseWords(str: string): string {
//   let reversedWords: string = "";
//   let temporaryWord: string = "";

//   for (let i = 0; i < str.length; i++) {
//     temporaryWord += str[i];

//     if (temporaryWord.includes(" ")) {
//       for (let j = temporaryWord.length - 1; j >= 0; j--) {
//         reversedWords += temporaryWord[j].trim();
//       }
//       reversedWords += " ";
//       temporaryWord = "";
//     }
//   }

//   for (let j = temporaryWord.length - 1; j >= 0; j--) {
//     reversedWords += temporaryWord[j];
//   }

//   console.log(reversedWords.length);
//   console.log(reversedWords);
//   return "Go for it";
// }

export function reverseWords(str: string): string {
  let reversedWords: string = "";
  let temporaryWord: string = "";
  
  for (let i = 0; i < str.length; i++) {
    temporaryWord += str[i];

    if (str[i + 1] === " " || str[i] === " ") {
      for (let j = temporaryWord.length - 1; j >= 0 ; j--) {
        reversedWords += temporaryWord[j];
      }

      reversedWords += str[i] === " " ? "" : " ";
      i = str[i] === " " ? i : i + 1;
      temporaryWord = "";
    }
  }

  for (let j = temporaryWord.length - 1; j >= 0 ; j--) {
    reversedWords += temporaryWord[j];
  }

  console.log(reversedWords);
  console.log(reversedWords.length);

  return "Go for it";
}

reverseWords("double  spaced  words");

console.log("double  spaced  words".length)