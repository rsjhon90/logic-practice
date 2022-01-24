
export const likes = (a : string[]): string  => {
  const qtLikes = a.length > 3 ? 'fourOrMore' : a.length.toString();

  type WhoLiked = { [i: string]: string };

  const whoLiked: WhoLiked = {
    1: `${a[0]} likes this`,
    2: `${a[0]} and ${a[1]} like this`,
    3: `${a[0]}, ${a[1]} and ${a[2]} like this`,
    fourOrMore: `${a[0]}, ${a[1]} and ${a.length - 2} others like this`,
  };

  return whoLiked[qtLikes] || 'no one likes this';
}

// export const likes = (a : string[]): string => {
//   if (a.length === 1) {
//     const oneLike = `${a[0]} likes this`;
//     return oneLike;
//   }

//   if (a.length > 1) {
//     if (a.length > 3) {
//       const fourOrMoreLikes = 
//         `${a.splice(0, 2)
//           .join(', ')} and ${a.length} others like this`;

//       return fourOrMoreLikes;
//     }

//     const twoOrThreeLikes = a.reduce((acc, curr, i) => {
//       if (i < a.length - 1) {
//         return `${acc}, ${curr}`
//       }

//       return `${acc} and ${curr} like this`;
//     });

//     return twoOrThreeLikes;
//   }

//   return 'no one likes this';
// }

// console.log(likes([
//   'Daniel'
// ]))
// console.log(likes([
//   'Daniel',
//   'Vitor'
// ]))
// console.log(likes([
//   'Daniel',
//   'Vitor',
//   `David`
// ]))
// console.log(likes([
//   'Daniel',
//   'Vitor',
//   `David`,
//   `Jony`,
//   'Rafael',
// ]))
// console.log(likes([]))