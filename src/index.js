module.exports = function toReadable(num) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num < 20) {
    return ones[num];
  }
  if (num < 100) {
    return num % 10
      ? `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`
      : tens[Math.floor(num / 10)];
  }
  if (num < 1000) {
    return num % 100
      ? `${ones[Math.floor(num / 100)]} hundred ${toReadable(num % 100)}`
      : `${ones[Math.floor(num / 100)]} hundred`;
  }
  return '';
};
