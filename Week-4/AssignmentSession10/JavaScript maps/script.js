function calcWordFrequencies(words) {
  const wordArray = words.split(" ");

  const frequencies = {};

  wordArray.forEach((word) => {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  });

  for (const [word, frequency] of Object.entries(frequencies)) {
    console.log(`${word} ${frequency}`);
  }
}

calcWordFrequencies("hey hi Mark hi mark");
