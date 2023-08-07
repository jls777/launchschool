let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(string, regex) {
  return string.filter(wrd => regex.test(wrd));
}

function allMatches(string, regex) {
  return string.map(wrd => regex.test(wrd));
}



