function createPhoneNumber2(numbers){
  if (numbers.length < 10) return 'Phone number must be 10 digits long.';
  
  const isNumber = numbers.every(n => typeof n === 'number');
  if (!isNumber) return 'Phone number digits must be a integer.';

  const tenNumbers = numbers.slice(0, 11);
  let phoneNumber = '(xxx) xxx-xxxx';
  
  tenNumbers.forEach(n => {
    phoneNumber = phoneNumber.replace(/x/, n.toString());
  });
  
  return phoneNumber;
}

// console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));