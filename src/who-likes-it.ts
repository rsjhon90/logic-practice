// export const likes = (a : string[]): string => {
//   if (a.length > 0) {
//     if (a.length === 1) {
//       return `${a[0]} likes this`;
//     }

//     if (a.length > 1) {
//       if (a.length === 2) {
//         return `${a[0]} and ${a[1]} like this`;
//       }

//       if (a.length === 3) {
//         return `${a[0]}, ${a[1]} and ${a[2]} like this`
//       }

//       return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
//     }
//   }

//   return 'no one likes this';
// }

export const likes = (a : string[]): string => {
  if (a.length === 1) {
    const oneLike = `${a[0]} likes this`;
    return oneLike;
  }

  if (a.length > 1) {
    if (a.length > 3) {
      const fourOrMoreLikes = 
        `${a.splice(0, 2)
          .join(', ')} and ${a.length} others like this`;

      return fourOrMoreLikes;
    }

    const twoOrThreeLikes = a.reduce((acc, curr, i) => {
      if (i < a.length - 1) {
        return `${acc}, ${curr}`
      }

      return `${acc} and ${curr} like this`;
    });

    return twoOrThreeLikes;
  }

  return 'no one likes this';
}

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
// likes([
//   'Daniel',
//   'Vitor',
//   `David`
// ])
// console.log(likes([
//   'Daniel',
//   'Vitor',
//   `David`,
//   `Jony`,
//   'Rafael',
// ]))
// console.log(likes([]))