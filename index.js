import analyzer from './analyzer.js';

document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.querySelector('textarea[name="user-input"]');
  const resetButton = document.getElementById('reset-button');

  const counters = {
    wordCount: document.querySelector('[data-testid="word-count"]'),
    characterCount: document.querySelector('[data-testid="character-count"]'),
    characterNoSpacesCount: document.querySelector('[data-testid="character-no-spaces-count"]'),
    numberCount: document.querySelector('[data-testid="number-count"]'),
    numberSum: document.querySelector('[data-testid="number-sum"]'),
    wordLengthAverage: document.querySelector('[data-testid="word-length-average"]'),
  };

  const updateCounters = () => {
    const text = userInput.value;
    
    if (text.trim() === '') {
      Object.values(counters).forEach(counter => {
        counter.innerHTML = counter.innerHTML.replace(/\d+/, '0');
      });
      return;
    }

    counters.wordCount.innerHTML = `Contagem de palavras: ${analyzer.getWordCount(text)}`;
    counters.characterCount.innerHTML = `Contagem de caracteres: ${analyzer.getCharacterCount(text)}`;
    counters.characterNoSpacesCount.innerHTML = `Contagem de caracteres (excluindo espaços): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    counters.numberCount.innerHTML = `Contagem de números: ${analyzer.getNumberCount(text)}`;
    counters.numberSum.innerHTML = `Soma total dos números: ${analyzer.getNumberSum(text)}`;
    counters.wordLengthAverage.innerHTML = `Comprimento médio das palavras: ${analyzer.getAverageWordLength(text)}`;
  };

  userInput.addEventListener('input', updateCounters);
  resetButton.addEventListener('click', () => {
    userInput.value = '';
    updateCounters();
  });
});