function indexOf(elem: any, array: any[], init?: number): number {
  // falha caso init é maior que o array
  if (init && init >= array.length) return -1;

  // init é negativo. Procura deslocando de frente para trás;
  if (init && init < 0) {
    const finalIndex = array.length + (init);

    for (let i = finalIndex; i > 0; i--) {
      const found = elem === array[i];

      if (found) return i;
    }

    return -1;
  }
  // procura com ou sem init
  for (let i = init || 0; i < array.length; i++) {
    const found = elem === array[i];

    if (found) return i;
  }

  // falha
  return -1;
}

// console.log(indexOf(9, [1, 1, 3, 4, 5, 6, 7, 8, 9, 0], -15));