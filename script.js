const MORSE_CODE_DICT = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
  'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.',
  '-': '-....-', '!': '-.-.--', '?': '..--..',
  '.': '.-.-.-', ',': '--..--', '/': '-..-.', '@': '.--.-.',
  '(': '-.--.',  ')': '-.--.-', '&': '.-...',
  ' ': '/'
};

const REVERSE_DICT = Object.fromEntries(
  Object.entries(MORSE_CODE_DICT).map(([k, v]) => [v, k])
);

function convertToMorse() {
  const input = document.getElementById('textInput').value.toUpperCase();
  const output = input.split('').map(char =>
    MORSE_CODE_DICT[char] || ''
  ).join(' ');
  document.getElementById('output').value = output;
}

function convertToText() {
  const input = document.getElementById('textInput').value.trim();
  const words = input.split(' / ');
  const decoded = words.map(word =>
    word.split(' ').map(symbol => REVERSE_DICT[symbol] || '').join('')
  ).join(' ');
  document.getElementById('output').value = decoded;
}

function clearFields() {
  document.getElementById('textInput').value = '';
  document.getElementById('output').value = '';
}



