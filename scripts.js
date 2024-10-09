/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) return null;
  if (str.trim() === '') return '';

  const words = split(str);
  return words.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord, ''
  );
}

function shortest(str) {
  if (!isString(str)) return null;
  if (str.trim() === '') return '';

  const words = split(str);
  return words.reduce((shortestWord, currentWord) =>
    currentWord.length < shortestWord.length ? currentWord : shortestWord, words[0]
  );
}

function reverse(str) {
  if (!isString(str)) return null;
  return str.split('').reverse().join('');
}

function palindrome(str) {
  if (!isString(str) || str.trim() === '') return false;

  const normalized = str.replace(/[\s.,!?]/g, '').toLowerCase();
  return normalized === reverse(normalized);
}

function vowels(str) {
  if (!isString(str)) return 0;

  const chars = str.toLowerCase().split('');
  return chars.filter(char => VOWELS.includes(char)).length;
}

function consonants(str) {
  if (!isString(str)) return 0;

  const chars = str.toLowerCase().split('');
  return chars.filter(char => CONSONANTS.includes(char)).length;
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Velkomin/n í strengjavinnslu forrit!\nSláðu inn streng til að fá upplýsingar.');
  const input = prompt('Sláðu inn streng:');

  if (input === null || input.trim() === '') return;

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  alert(
    `Niðurstöður fyrir strenginn "${input}":
    Lengsta orð: ${longestWord}
    Stysta orð: ${shortestWord}
    Öfugur strengur: ${reversed}
    Fjöldi sérhljóða: ${vowelCount}
    Fjöldi samhljóða: ${consonantCount}
    Er palindrome: ${isPalindrome ? 'Já' : 'Nei'}`
  );

  if (confirm('Viltu prófa annan streng?')) {
    start();
  }
}

start();