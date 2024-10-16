/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxzþð'.split('');

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
  const splitArray = str.split(separator);
  console.log('split:', splitArray);
  return splitArray;
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á


function longest(str) {
  if (!isString(str)) return null;
  if (str.trim() === '') return '';

  const words = split(str);
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log('longestWord:', longestWord);
  return longestWord;
}

console.assert(
  longest('Halló Heimur') === 'Heimur' // Velur lengsta orðið
);
console.assert(
  longest('Það er sól') === 'Það'
);
console.assert(
  longest('') === ''
);
console.assert(
  longest (123) === null
);




function shortest(str) {
  if (!isString(str)) return null;
  if (str.trim() === '') return '';

  const words = split(str);
  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  console.log('shortestWord:', shortestWord);
  return shortestWord;
}

console.assert(
  shortest('Halló Heimur') === 'Halló'
);
console.assert(
  shortest('Það er sól') === 'er'
);
console.assert(
  shortest('') === ''
);
console.assert(
  shortest(123) === null
);




function reverse(str) {
  if (!isString(str)) {
    return null;
  }
  const split = str.split('');
  const reversed = split.reverse();

  console.log('split:', split);
  console.log('reversed:', reversed);

  return reversed.join('');
  
}

console.assert(
  reverse('Halló heimur') === 'rumieh óllaH'
);
console.assert(
  reverse('Það er sól') === 'lós re ðaÞ'
);
console.assert(
  reverse('') === ''
);
console.assert(
  reverse(123) === null
);




function palindrome(str) {
  if (!isString(str) || str.trim() === '') return false;

  const normalized = str
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(/,/g, '')
    .replace(/!/g, '')
    .replace(/\?/g, '')
    .toLowerCase();

  const reversed = reverse(normalized);

  console.log('normalized:', normalized);
  console.log('reversed:', reversed);

  return normalized === reversed;
}

console.assert(
  palindrome('abba') === true
);
console.assert(
  palindrome('A man, a plan, a canal, Panama') === true
);
console.assert(
  palindrome('halló') === false
);
console.assert(
  palindrome('') === false
);




function vowels(str) {
  if (!isString(str)) return 0;

  const chars = str.toLowerCase().split('');
  const vowelCount = chars.filter(char => VOWELS.includes(char)).length;

  console.log('vowelCount:', vowelCount);
  return vowelCount;
}

console.assert(
  vowels('Halló Heimur') === 5
);
console.assert(
  vowels('Það er sól') === 3
);
console.assert(
  vowels(123) === 0
);




function consonants(str) {
  if (!isString(str)) return 0;

  const chars = str.toLowerCase().split('');
  const consonantCount = chars.filter(char => CONSONANTS.includes(char)).length;

  console.log('consonantCount:', consonantCount);
  return consonantCount;
}

console.assert(
  consonants('Halló Heimur') === 6
);
console.assert(
  consonants('Það er sól') === 5
);
console.assert(
  consonants(123) === 0
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Velkomin/n í þennan leik!\nSláðu inn streng(orð / setningu) til að fá skemmtilegar staðreyndir!');
  const input = prompt('Sláðu inn streng:');

  if (input === null || input.trim() === '') return;

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  console.log('Niðurstöður:', {
    input,
    longestWord,
    shortestWord,
    reversed,
    vowelCount,
    consonantCount,
    isPalindrome
  });

  alert(
    `Niðurstöður fyrir strenginn "${input}":
    Lengsta orð: ${longestWord}
    Stysta orð: ${shortestWord}
    Öfugur strengur: ${reversed}
    Fjöldi sérhljóða: ${vowelCount}
    Fjöldi samhljóða: ${consonantCount}
    Er palindrome: ${isPalindrome ? 'Já' : 'Nei'}`
  );

  if (confirm('Gera aftur?')) {
    start();
  }
}

start();