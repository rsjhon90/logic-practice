// return masked string
function maskify(cc: string): string {
  let cardMasked = cc.split('');

  if (cc.length > 4) {
    for (let i = 0; i < cc.length - 4; i++) {
      cardMasked[i] = '#';
    };
    
    return cardMasked.join('');
  };

  return cardMasked.join('');
}

// console.log(maskify('4556364607935616'))
// console.log(maskify('222'))


// maskify('4556364607935616')